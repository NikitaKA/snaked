import Coords from './Coords';
import Food from './Food';
import Score from './Score';
import Snake from './Snake';

import Controls, { CONTROLS_WSAD } from './Controls';
import { DRAWTEXT_ALIGN_CENTER, drawText } from './Utils';
import Wall from './Wall';

export default class Field {
  constructor(canvas, { width = 20, height = 20, cellSize = 10, endless = false } = {}) {
    this.app = null;

    this.sizeX = width;
    this.sizeY = height;

    this.cellSize = cellSize;

    this.width = width * this.cellSize;
    this.height = height * this.cellSize;

    this.snakes = [];
    this.cells = [];
    this.food = [];
    this.walls = [];

    this.endless = endless;

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.init();
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';

    for (let y = 0; y < this.sizeY; y++) {
      let row = [];

      for (let x = 0; x < this.sizeX; x++) {
        row.push(null);
      }

      this.cells.push(row);
    }
  }

  addSnake(snake) {
    if (!this.snakes.length) {
      if (!snake) {
        const controls = new Controls(this.app);
        snake = new Snake(this.app, this, controls);
      }

      this.snakes.push(snake);

      snake.spawn();

      for (let i = 0; i < 5; i++) {
        this.addWall(new Wall(this, Coords.generate(this)));
      }
    } else if (this.snakes.length === 1) {
      const controls = new Controls(this.app, CONTROLS_WSAD);

      const snake = new Snake(this.app, this, controls, { color: 'red' });
      this.snakes.push(snake);
      snake.spawn();
    }
  }

  killSnake(snake) {
    let index = this.snakes.findIndex(s => s === snake);

    this.snakes.splice(index, 1);

    snake.destroy();
  }

  getCell(coords) {
    return this.cells[coords.y / this.cellSize]?.[coords.x / this.cellSize];
  }

  writeCell(cell) {
    return (this.cells[cell.coords.y / this.cellSize][cell.coords.x / this.cellSize] = cell);
  }

  deleteCell(cell) {
    return !(this.cells[cell.coords.y / this.cellSize][cell.coords.x / this.cellSize] = null);
  }

  update(delta) {
    this.snakes.forEach(snake => snake.tick(delta));
    this.generateFood();
  }

  generateFood() {
    if (!this.food.length) {
      const coords = Coords.generate(this);
      const food = new Food(this, coords);

      this.writeCell(food);

      this.food.push(food);
    }
  }

  addWall(wall) {
    this.writeCell(wall);
    this.walls.push(wall);
  }

  draw(delta) {
    this.clearField();

    this.drawWalls();

    this.drawSnakes();

    this.drawFood(delta);

    if (!this.snakes.length && !this.app.isGameOver) {
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
    this.food.forEach(food => {
      food.tick(delta);
      food.draw(this.ctx);
    });
  }

  drawWalls(delta) {
    this.walls.forEach(wall => {
      wall.tick(delta);
      wall.draw(this.ctx);
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
        { font: '12px Arial', height: 12, text: `SCORE: ${this.snakes[0].score}` }
      ]
    });
  };
}
