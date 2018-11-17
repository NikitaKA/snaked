import Cell from './Cell';

export default class Food {
  constructor(app, { power = 1 } = {}) {
    this.app = app;
    this.cell = Cell.generate(app);
    this.power = power;
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
