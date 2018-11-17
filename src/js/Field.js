export default class Field {
  constructor(canvas, { width = 20, height = 20, cellSize = 10, endless = false, debug = false } = {}) {
    this.app = null;

    this.size = {
      x: width,
      y: height
    };

    this.cellSize = cellSize;

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.width = width * this.cellSize;
    this.height = height * this.cellSize;

    this.endless = endless;

    this.hue = 0;
    this.hueDirection = 1;

    this.init();
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
  }

  addSnakes(snakes) {
    this.snakes = snakes;
  }

  draw(delta) {
    this.clearField();
    this.drawSnakes();

    if (this.app.debug) {
      this.drawDebug(delta);
    }

    this.hue += this.hueDirection;

    if (this.hue > 255) {
      this.hueDirection *= -1;
      this.hue = 255;
    }
    if (this.hue < 0) {
      this.hueDirection *= -1;
      this.hue = 0;
    }
  }

  clearField() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawSnakes() {
    this.snakes.forEach(snake => this.drawSnake(snake));
  }

  drawSnake(snake) {
    this.ctx.fillStyle = 'hsl(' + this.hue + ',100%,50%)';

    snake.body.forEach(({ x, y }) => {
      this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
    });
  }

  drawDebug(delta) {
    this.ctx.font = 'bold 10px Arial';

    const fps = delta > 0 ? Math.round(1000 / delta) : '00';
    const debug = `${fps} FPS`;

    this.ctx.fillStyle = 'black';

    this.ctx.fillText(debug, this.cellSize, this.height - this.cellSize);
  }
}
