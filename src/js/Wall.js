import Cell from './Cell';

export default class Wall extends Cell {
  constructor(field, coords) {
    super(coords);

    this.field = field;
  }

  static isWall(cell) {
    return cell instanceof Wall;
  }

  draw(ctx) {
    ctx.save();

    ctx.fillStyle = '#aaa';

    ctx.fillRect(this.coords.x, this.coords.y, this.field.cellSize, this.field.cellSize);

    ctx.restore();
  }
}
