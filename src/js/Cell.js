function cellGenerator({ size: { x, y }, cellSize }) {
  const cx = Math.round(Math.random() * (x - 1)) * cellSize;
  const cy = Math.round(Math.random() * (y - 1)) * cellSize;

  return new Cell(cx, cy);
}

export default class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static generate(app) {
    let protoCell = cellGenerator(app.field);
    let cell = null;

    while (!cell) {
      if (app.cellIntersectingWithSnakes(protoCell)) {
        protoCell = cellGenerator(app.field);
      } else {
        cell = protoCell;
      }
    }

    return cell;
  }
}
