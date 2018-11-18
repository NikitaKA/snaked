import Coords from './Coords';
import Cell from './Cell';

export default class Food extends Cell {
  constructor(app, { coords = Coords.generate(app), power = 1, score = 100 } = {}) {
    super(coords);

    this.app = app;
    this.power = power;
    this.score = score;
  }

  destroy() {
    let index = null;

    this.app.food.forEach((food, i) => {
      if (food === this) {
        index = i;
      }
    });

    this.app.food.splice(index, 1);
  }
}
