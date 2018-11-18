function coordsGenerator(field) {
  const cx = Math.round(Math.random() * (field.size.x - 1)) * field.cellSize;
  const cy = Math.round(Math.random() * (field.size.y - 1)) * field.cellSize;

  return new Coords(cx, cy);
}

export default class Coords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static generate(app, force = false) {
    let newCoords = coordsGenerator(app.field);
    let coords = null;

    if (!force) {
      while (!coords) {
        if (app.coordsIntersectingWithSnakes(newCoords)) {
          newCoords = coordsGenerator(app.field);
        } else {
          coords = newCoords;
        }
      }
    }

    return coords || newCoords;
  }
}
