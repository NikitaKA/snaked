export default class Field {
  constructor(canvas, { width = 20, height = 20, cellSize = 10, endless = false } = {}) {
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

  draw() {
    this.clearField();
    this.drawSnakes();
  }

  clearField() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawSnakes() {
    this.snakes.forEach(snake => this.drawSnake(snake));
  }

  drawSnake(snake) {
    this.ctx.fillStyle = 'black';

    snake.body.forEach(({ x, y }) => {
      this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
    });
  }
}
