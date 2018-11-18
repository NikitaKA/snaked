import Coords from './Coords';

export default class Cell {
  constructor(coords) {
    this.coords = coords;
  }

  static generate(app) {
    const coords = Coords.generate(app);
    return new Cell(coords);
  }
}
