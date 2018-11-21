import Cell from './Cell';

export default class Wall extends Cell {
  constructor(field, coords) {
    super(coords);

    this.field = field;
  }
}
