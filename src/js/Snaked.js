import Food from './Food';
import Score from './Score';

export const STATE_INITIALIZED = 'STATE_INITIALIZED';
export const STATE_PAUSED = 'STATE_PAUSED';
export const STATE_RUNNING = 'STATE_RUNNING';
export const STATE_STOPPED = 'STATE_STOPPED';

export default class Snaked {
  constructor(field, controls, { debug = false } = {}) {
    this.field = field;
    this.controls = controls;
    this.snakes = [];
    this.state = STATE_INITIALIZED;
    this.reqAnimationFrame = null;
    this.debug = debug;
    this.then = 0;
    this.started = false;
    this.gameover = false;

    this.onTickEndCallbacks = [];

    this.food = [];

    this.field.app = this;
    this.controls.app = this;
  }

  start() {
    if (this.gameover) {
      return;
    }

    if (this.state === STATE_INITIALIZED) {
      this.field.addSnakes(this.snakes);
      this.snakes.forEach(snake => snake.spawn());
    }

    this.state = STATE_RUNNING;

    if (!this.reqAnimationFrame) {
      this.then = performance.now();
      this.reqAnimationFrame = window.requestAnimationFrame(this.tick);
    }
  }

  pause() {
    this.state = STATE_PAUSED;
  }

  stop() {
    window.cancelAnimationFrame(this.reqAnimationFrame);

    this.reqAnimationFrame = null;
    this.state = STATE_STOPPED;
  }

  tick = now => {
    const delta = this.setDelta(now);

    this.update(delta);
    this.render(delta);

    this.onTickEnd();

    if (this.state !== STATE_STOPPED) {
      this.reqAnimationFrame = window.requestAnimationFrame(this.tick);
    }
  };

  meetSnake(snake) {
    snake.app = this;
    snake.field = this.field;
    snake.controls = this.controls;

    this.snakes.push(snake);
  }

  setDelta(now) {
    const delta = now - this.then;

    this.then = now;

    return delta;
  }

  update(delta) {
    this.generateFood();

    this.snakes.forEach(snake => snake.tick(delta));
  }

  render(delta) {
    this.field.draw(delta);
  }

  generateFood() {
    if (!this.food.length) {
      const food = new Food(this);

      this.food.push(food);
    }
  }

  cellIntersectingWithObstacles(coords) {
    if (this.coordsIntersectingWithSnakes(coords)) {
      return this.gameOver();
    }

    if (this.field.endless) {
      return false;
    } else {
      if (this.coorsOutsideField(coords)) {
        return this.gameOver();
      }
    }

    return false;
  }

  gameOver() {
    this.gameover = true;

    this.stop();

    this.onTickEnd(this.field.gameOver);

    Score.checkScore(this.snakes[0].score);

    return true;
  }

  onTickEnd(callback) {
    if (callback) {
      this.onTickEndCallbacks.push(callback);
    } else {
      this.onTickEndCallbacks.forEach(cb => cb());
      this.onTickEndCallbacks = [];
    }
  }

  coorsOutsideField(coords) {
    return coords.x < 0 || coords.x >= this.field.width || coords.y < 0 || coords.y >= this.field.height;
  }

  coordsIntersectingWithSnakes(coords) {
    let intersected = false;

    this.snakes.forEach(snake => {
      if (!intersected) {
        snake.body.forEach(cell => {
          if (coords.x === cell.coords.x && coords.y === cell.coords.y) {
            intersected = true;
          }
        });
      }
    });

    return intersected;
  }
}
