import BezierEasing from 'bezier-easing';

import * as states from './Snaked';
import * as CONTROLS from './Controls';

import Coords from './Coords';
import Body from './Body';

export default class Snake {
  constructor(app, controls, { speed = 5, toGrow = 2, color = 'black' } = {}) {
    this.app = app;
    this.field = this.app.field;
    this.controls = controls;
    this.controls.app = app;

    this.body = [];
    this.baseSpeed = 200 - (speed - 1) * 10;
    this.minimumSpeed = 20;
    this.direction = null;
    this.passed = 0;
    this.toGrow = toGrow;
    this.consumed = 0;
    this.score = 0;
    this.color = color;

    this.speedEasing = BezierEasing(0.25, 0.46, 0.45, 0.94);
  }

  get speed() {
    let speed = this.baseSpeed;

    if (this.consumed) {
      const easing = this.speedEasing(this.consumed / 50);

      speed = Math.round(this.baseSpeed - (this.baseSpeed - this.minimumSpeed) * easing);
    }

    return speed;
  }

  get size() {
    return this.body.length;
  }

  get head() {
    return this.body[0];
  }

  tick(delta) {
    this.passed += delta;

    this.deTick(this.move);
  }

  deTick(callback) {
    if (this.passed >= this.speed) {
      this.passed = this.passed - this.speed;

      callback();

      this.deTick(callback);
    }
  }

  spawn(x = null, y = null) {
    const coords = x != null && y != null ? new Coords(x, y) : Coords.generate(this.app);
    this.body.push(new Body(coords));
  }

  checkReverse() {
    return (
      (this.direction === CONTROLS.DIRECTION_LEFT && this.controls.direction === CONTROLS.DIRECTION_RIGHT) ||
      (this.direction === CONTROLS.DIRECTION_RIGHT && this.controls.direction === CONTROLS.DIRECTION_LEFT) ||
      (this.direction === CONTROLS.DIRECTION_UP && this.controls.direction === CONTROLS.DIRECTION_DOWN) ||
      (this.direction === CONTROLS.DIRECTION_DOWN && this.controls.direction === CONTROLS.DIRECTION_UP)
    );
  }

  move = () => {
    if (this.app.state !== states.STATE_RUNNING) {
      return false;
    }

    const { x, y } = this.head.coords;

    let headNewCoordsCheck = null;

    let direction = this.checkReverse() ? this.direction : this.controls.direction;

    switch (direction) {
      case CONTROLS.DIRECTION_LEFT:
        headNewCoordsCheck = new Coords(x - this.field.cellSize, y);

        break;

      case CONTROLS.DIRECTION_RIGHT:
        headNewCoordsCheck = new Coords(x + this.field.cellSize, y);

        break;

      case CONTROLS.DIRECTION_UP:
        headNewCoordsCheck = new Coords(x, y - this.field.cellSize);

        break;

      case CONTROLS.DIRECTION_DOWN:
        headNewCoordsCheck = new Coords(x, y + this.field.cellSize);

        break;
    }

    if (this.controls.direction) {
      // TODO: temp
      if (!this.app.started) {
        this.app.started = true;
      }

      if (!this.app.cellIntersectingWithObstacles(this, headNewCoordsCheck)) {
        let headNewCoords = this.sideTravel(headNewCoordsCheck);

        this.direction = direction;

        this.eat(headNewCoords);
      }
    }
  };

  addBody(coords) {
    this.body.unshift(new Body(coords));
  }

  eat(coords) {
    this.addBody(coords);
    this.feed(coords);
  }

  feed(coordsToEat) {
    let foodCell = this.checkFoodInCoords(coordsToEat);

    if (foodCell) {
      this.consumed++;
      this.score += foodCell.score;

      this.toGrow = foodCell.power;

      foodCell.destroy();
    }

    this.tailTrimmer();
  }

  tailTrimmer() {
    if (this.toGrow) {
      this.toGrow--;
      return false;
    }

    this.body.pop();
  }

  checkFoodInCoords(coords) {
    let foodCell = null;

    this.app.food.forEach(food => {
      if (!foodCell) {
        if (food.coords.x === coords.x && food.coords.y === coords.y) {
          foodCell = food;
        }
      }
    });

    return foodCell;
  }

  sideTravel(coords) {
    let newCoords = null;

    if (coords.x < 0 || coords.x >= this.field.width || coords.y < 0 || coords.y >= this.field.height) {
      let x, y;

      if (coords.x < 0) x = this.field.width - this.field.cellSize;
      if (coords.y < 0) y = this.field.height - this.field.cellSize;
      if (coords.x >= this.field.width) x = 0;
      if (coords.y >= this.field.height) y = 0;

      newCoords = new Coords(x, y);
    }

    return newCoords || coords;
  }
}
