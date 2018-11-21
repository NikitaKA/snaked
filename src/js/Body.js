import Cell from './Cell';

export default class Body extends Cell {
  constructor(snake, coords) {
    super(coords);

    this.snake = snake;
  }

  static isBody(cell) {
    return cell instanceof Body;
  }
}
