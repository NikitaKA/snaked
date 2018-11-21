import Coords from './Coords';

export default class Cell {
  constructor(coords, { animationSpeed = 0 } = {}) {
    this.coords = coords;

    this.msPassed = 0;
    this.animationSpeed = animationSpeed;
  }

  tick(delta) {
    this.msPassed += delta;

    if (this.animationSpeed) {
      this.deTick(this.update);
    } else {
      this.update();
    }
  }

  deTick(callback) {
    if (this.msPassed >= this.animationSpeed) {
      this.msPassed = this.msPassed - this.animationSpeed;

      callback();

      this.deTick(callback);
    }
  }

  update() {}

  static generate(field) {
    const coords = Coords.generate(field);
    return new Cell(coords);
  }
}
