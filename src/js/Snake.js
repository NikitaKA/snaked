import * as CONTROLS from './Controls';

export default class Snake {
  constructor(field, controls, { speed = 10 } = {}) {
    this.field = field;
    this.controls = controls;
    this.body = [];
    this.tickQuant = 0;
    this.speed = speed;
    this.direction = null;
  }

  tick() {
    this.tickQuant++;

    if (this.tickQuant === this.speed) {
      this.tickQuant = 0;

      this.move();
    }
  }

  spawn(x = 0, y = 0) {
    this.body.push({
      x,
      y
    });
  }

  move() {
    const { x, y } = this.body[0];

    let nextHead = null;

    let reverse =
      (this.direction === CONTROLS.DIRECTION_LEFT && this.controls.direction === CONTROLS.DIRECTION_RIGHT) ||
      (this.direction === CONTROLS.DIRECTION_RIGHT && this.controls.direction === CONTROLS.DIRECTION_LEFT) ||
      (this.direction === CONTROLS.DIRECTION_UP && this.controls.direction === CONTROLS.DIRECTION_DOWN) ||
      (this.direction === CONTROLS.DIRECTION_DOWN && this.controls.direction === CONTROLS.DIRECTION_UP);

    let direction = reverse ? this.direction : this.controls.direction;

    switch (direction) {
      case CONTROLS.DIRECTION_LEFT:
        nextHead = {
          x: x - this.field.cellSize,
          y
        };

        break;

      case CONTROLS.DIRECTION_RIGHT:
        nextHead = {
          x: x + this.field.cellSize,
          y
        };

        break;

      case CONTROLS.DIRECTION_UP:
        nextHead = {
          x,
          y: y - this.field.cellSize
        };

        break;

      case CONTROLS.DIRECTION_DOWN:
        nextHead = {
          x,
          y: y + this.field.cellSize
        };

        break;
    }

    if (this.controls.direction) {
      let finalHead = this.checkDimensions(nextHead);

      if (finalHead) {
        this.direction = direction;

        this.body.unshift(finalHead);

        if (this.body.length > 5) {
          this.body.pop();
        }
      }
    }
  }

  checkDimensions({ x, y }) {
    if (x < 0 || x >= this.field.width || y < 0 || y >= this.field.height) {
      if (this.field.endless) {
        if (x < 0) x = this.field.width - this.field.cellSize;
        if (y < 0) y = this.field.height - this.field.cellSize;
        if (x >= this.field.width) x = 0;
        if (y >= this.field.height) y = 0;
      } else {
        return false;
      }
    }

    return { x, y };
  }
}
