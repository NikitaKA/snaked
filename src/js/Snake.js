import * as states from './Snaked';
import * as CONTROLS from './Controls';

import Cell from './Cell';

export default class Snake {
  constructor({ speed = 100, toGrow = 2 } = {}) {
    this.app = null;
    this.field = null;
    this.controls = null;
    this.body = [];
    this.speed = speed;
    this.direction = null;
    this.passed = 0;
    this.toGrow = toGrow;
  }

  get size() {
    return this.body.length;
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

  spawn(x = 0, y = 0) {
    this.body.push(new Cell(x, y));
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

    const { x, y } = this.body[0];

    let nextHeadCell = null;

    let direction = this.checkReverse() ? this.direction : this.controls.direction;

    switch (direction) {
      case CONTROLS.DIRECTION_LEFT:
        nextHeadCell = new Cell(x - this.field.cellSize, y);

        break;

      case CONTROLS.DIRECTION_RIGHT:
        nextHeadCell = new Cell(x + this.field.cellSize, y);

        break;

      case CONTROLS.DIRECTION_UP:
        nextHeadCell = new Cell(x, y - this.field.cellSize);

        break;

      case CONTROLS.DIRECTION_DOWN:
        nextHeadCell = new Cell(x, y + this.field.cellSize);

        break;
    }

    if (this.controls.direction) {
      if (!this.app.cellIntersectingWithObstacles(nextHeadCell)) {
        let newHeadCell = this.teleport(nextHeadCell);

        this.direction = direction;
        this.body.unshift(newHeadCell);
        this.feed(newHeadCell);
        this.tailTrimmer();
      }
    }
  };

  tailTrimmer() {
    if (this.toGrow) {
      this.toGrow--;
      return false;
    }

    this.body.pop();
  }

  eatableCellCheck(cellToCheck) {
    let eatableCell = null;

    this.app.food.forEach(food => {
      if (!eatableCell) {
        if (food.cell.x === cellToCheck.x && food.cell.y === cellToCheck.y) {
          eatableCell = food;
        }
      }
    });

    return eatableCell;
  }

  feed(cellToEat) {
    let foodCell = this.eatableCellCheck(cellToEat);

    if (foodCell) {
      this.toGrow = foodCell.power;
      foodCell.destroy();
    }
  }

  teleport({ x, y }) {
    if (x < 0 || x >= this.field.width || y < 0 || y >= this.field.height) {
      if (x < 0) x = this.field.width - this.field.cellSize;
      if (y < 0) y = this.field.height - this.field.cellSize;
      if (x >= this.field.width) x = 0;
      if (y >= this.field.height) y = 0;
    }

    return new Cell(x, y);
  }
}
