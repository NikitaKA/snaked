import Cell from './Cell';

export default class Food extends Cell {
  constructor(field, coords, { power = 1, score = 100 } = {}) {
    super(coords);

    this.field = field;

    this.power = power;
    this.score = score;

    this.hue = 0;
    this.hueDirection = 1;
    this.hueStep = 3;

    this.zoom = 1;
    this.currentZoom = 0;
    this.zoomStep = 0.1;
    this.zoomDirection = 1;

    this.rotate = 360;
    this.currentDegree = 0;
    this.degreeStep = 1;
  }

  static isFood(cell) {
    return cell instanceof Food;
  }

  update = () => {
    this.hue += this.hueStep * this.hueDirection;

    if (this.hue > 255) {
      this.hueDirection *= -1;
      this.hue = 255;
    }
    if (this.hue < 0) {
      this.hueDirection *= -1;
      this.hue = 0;
    }

    this.currentZoom += this.zoomStep * this.zoomDirection;

    if (
      (this.zoomDirection && this.currentZoom >= this.zoom) ||
      (this.zoomDirection && this.currentZoom <= -this.zoom)
    ) {
      this.zoomDirection = -1 * this.zoomDirection;
    }

    this.currentDegree += this.degreeStep;

    if (this.currentDegree >= this.rotate) {
      this.currentDegree = 0;
    }
  };

  draw = ctx => {
    ctx.save();

    ctx.translate(this.coords.x + this.field.cellSize / 2, this.coords.y + this.field.cellSize / 2);
    ctx.rotate((this.currentDegree * Math.PI) / 180);
    ctx.translate(-this.coords.x - this.field.cellSize / 2, -this.coords.y - this.field.cellSize / 2);

    ctx.fillStyle = 'hsl(' + this.hue + ',100%,50%)';

    ctx.fillRect(
      this.coords.x - this.currentZoom,
      this.coords.y - this.currentZoom,
      this.field.cellSize + this.currentZoom * 2,
      this.field.cellSize + this.currentZoom * 2
    );

    ctx.restore();
  };

  consume() {
    this.destroy();
  }

  destroy() {
    let index = null;

    this.field.food.forEach((food, i) => {
      if (food === this) {
        index = i;
      }
    });

    const food = this.field.food.splice(index, 1)[0];
    this.field.deleteCell(food);
  }
}
