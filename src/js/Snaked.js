import Food from './Food';
import Score from './Score';
import Controls from './Controls';
import Snake from './Snake';

export const STATE_INITIALIZED = 'STATE_INITIALIZED';
export const STATE_PAUSED = 'STATE_PAUSED';
export const STATE_RUNNING = 'STATE_RUNNING';
export const STATE_STOPPED = 'STATE_STOPPED';

export default class Snaked {
  constructor(field, { debug = false } = {}) {
    this.field = field;
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

    this.init();
  }

  init() {
    window.addEventListener('keypress', e => {
      this.appControl(e);
    });

    window.addEventListener('blur', () => {
      this.stop();
    });

    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.start();
      } else {
        this.stop();
      }
    });

    window.addEventListener('focus', () => {
      this.start();
    });
  }

  addSnake() {
    if (!this.snakes.length) {
      const controls = new Controls();
      const snake = new Snake(this, controls);
      this.snakes.push(snake);
      snake.spawn();
    } else if (this.snakes.length === 1) {
      const controls = new Controls({
        left: 'KeyA',
        right: 'KeyD',
        up: 'KeyW',
        down: 'KeyS'
      });

      const snake = new Snake(this, controls, { color: 'red' });
      this.snakes.push(snake);
      snake.spawn();
    }
  }

  appControl(e) {
    switch (e.code) {
      case 'Space':
        switch (this.state) {
          case STATE_RUNNING:
            this.pause();
            break;

          case STATE_PAUSED:
            this.start();
            break;
        }

        break;

      case 'Enter':
        this.addSnake();
    }
  }

  start() {
    if (this.gameover) {
      return;
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

  cellIntersectingWithObstacles(snake, coords) {
    if (this.coordsIntersectingWithSnakes(coords)) {
      return this.gameOver(snake);
    }

    if (this.field.endless) {
      return false;
    } else {
      if (this.coorsOutsideField(coords)) {
        return this.gameOver(snake);
      }
    }

    return false;
  }

  killSnake(snake) {
    let index = this.snakes.findIndex(s => s === snake);

    this.snakes.splice(index, 1);
  }

  gameOver(snake) {
    if (this.snakes.length > 1) {
      this.killSnake(snake);
    } else {
      this.gameover = true;
      this.stop();
      this.onTickEnd(this.field.gameOver);
      Score.checkScore(this.snakes[0].score);
    }

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
