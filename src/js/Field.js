import Score from './Score';
import { DRAWTEXT_ALIGN_CENTER, drawText } from './Utils';

export default class Field {
  constructor(canvas, { width = 0, height = 0, cellSize = 10, endless = false, debug = false } = {}) {
    this.app = null;

    if (!width) width = Math.floor(window.innerWidth / cellSize);
    if (!height) height = Math.floor(window.innerHeight / cellSize);

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

  get snakes() {
    return this.app.snakes;
  }

  draw(delta) {
    this.clearField();

    this.drawSnakes();

    this.drawFood(delta);

    if (!this.app.started) {
      this.drawScore();
    }

    if (this.app.debug && delta) {
      this.drawDebug(delta);
    }
  }

  drawScore() {
    const score = Score.score;

    if (!score.length) {
      return;
    }

    let scores = [];

    score.forEach(({ name, points }) => {
      scores.push({
        font: '12px Arial',
        height: 12,
        text: `${name} ${points}`
      });
    });

    drawText(this.ctx, this, {
      align: DRAWTEXT_ALIGN_CENTER,
      padding: 2,
      bgcolor: '#ffffff',
      bgAlpha: 0.75,
      lines: [{ font: 'bold 14px Arial', height: 14, text: 'BEST SCORES' }, ...scores]
    });
  }

  clearField() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawSnakes() {
    this.snakes.forEach(snake => this.drawSnake(snake));
  }

  drawSnake(snake) {
    this.ctx.save();

    this.ctx.fillStyle = snake.color;

    snake.body.forEach(({ coords: { x, y } }) => {
      this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
    });

    this.ctx.restore();
  }

  drawFood(delta) {
    this.app.food.forEach(food => {
      food.tick(delta);
      food.draw(this.ctx);
    });
  }

  drawDebug(delta) {
    this.ctx.font = 'bold 10px Arial';

    const fps = delta > 0 ? Math.round(1000 / delta) : '00';
    const debug = `FPS: ${fps}`;

    this.ctx.fillStyle = 'black';
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillText(debug, this.cellSize, this.height - this.cellSize);
    this.ctx.globalAlpha = 1;
  }

  gameOver = () => {
    this.clearField();

    this.draw();

    drawText(this.ctx, this, {
      align: DRAWTEXT_ALIGN_CENTER,
      padding: 2,
      bgcolor: '#ffffff',
      bgAlpha: 0.75,
      lines: [
        { font: 'bold 14px Arial', height: 14, text: 'GAME OVER' },
        { font: '12px Arial', height: 12, text: `SCORE: ${this.app.snakes[0].score}` }
      ]
    });
  };
}
