function coordsGenerator(field) {
  const cx = Math.round(Math.random() * (field.sizeX - 1)) * field.cellSize;
  const cy = Math.round(Math.random() * (field.sizeY - 1)) * field.cellSize;

  return new Coords(cx, cy);
}

export default class Coords {
  /**
   * Create a coords.
   * @param {number} x - Cell row.
   * @param {number} y - Cell column.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static generate(field, force = false) {
    let newCoords = coordsGenerator(field);
    let coords = null;

    if (!force) {
      while (!coords) {
        if (field.getCell(newCoords)) {
          newCoords = coordsGenerator(field);
        } else {
          coords = newCoords;
        }
      }
    }

    return coords || newCoords;
  }
}
