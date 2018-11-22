import Score from './Score';
import Food from './Food';
import Menu from './Menu';

export const STATE_INITIALIZED = 'STATE_INITIALIZED';
export const STATE_PAUSED = 'STATE_PAUSED';
export const STATE_RUNNING = 'STATE_RUNNING';
export const STATE_STOPPED = 'STATE_STOPPED';

export default class Snaked {
  #isGameOver = false;
  #reqAnimationFrame = null;
  #state = STATE_INITIALIZED;
  #then = 0;
  #onTickEndCallbacks = [];
  #menu = null;

  constructor(field, { debug = false } = {}) {
    this.field = field;
    this.debug = debug;

    this.#menu = new Menu(this.field.ctx);

    this.#init();
  }

  get isGameOver() {
    return this.#isGameOver;
  }

  get state() {
    return this.#state;
  }

  #init = () => {
    this.field.app = this;

    window.addEventListener('keypress', e => {
      this.#appControl(e);
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

    this.#showMainMenu();
  };

  #showMainMenu = () => {
    this.#menu.set({
      title: 'MAIN MENU',
      options: [
        {
          text: `Player 1`,
          func: () => {
            this.field.addSnake();
            this.#hideMainMenu();
          }
        },
        {
          text: `Player 2`,
          func: () => {
            this.field.addSnake();
            this.field.addSnake();
            this.#hideMainMenu();
          }
        },
        {
          text: `Show scores`,
          func: () => {
            this.field.showScores = true;
            this.#hideMainMenu();
          }
        }
      ]
    });

    this.#menu.show();
  };

  #hideMainMenu = () => {
    this.#menu.hide();
  };

  #appControl = e => {
    switch (e.code) {
      case 'Space':
        switch (this.#state) {
          case STATE_RUNNING:
            this.pause();
            break;

          case STATE_PAUSED:
            this.start();
            break;
        }

        break;
    }
  };

  start() {
    if (this.#isGameOver) {
      return;
    }

    this.#state = STATE_RUNNING;

    if (!this.#reqAnimationFrame) {
      this.#then = performance.now();
      this.#reqAnimationFrame = window.requestAnimationFrame(this.#tick);
    }
  }

  pause() {
    this.#state = STATE_PAUSED;
  }

  stop() {
    window.cancelAnimationFrame(this.#reqAnimationFrame);

    this.#reqAnimationFrame = null;
    this.#state = STATE_STOPPED;
  }

  #tick = now => {
    const delta = this.#setDelta(now);

    this.#update(delta);
    this.#render(delta);

    this.#onTickEnd();

    if (this.#state !== STATE_STOPPED) {
      this.#reqAnimationFrame = window.requestAnimationFrame(this.#tick);
    }
  };

  #setDelta = now => {
    const delta = now - this.#then;

    this.#then = now;

    return delta;
  };

  #update = delta => {
    this.field.tick(delta);
    this.#menu.tick(delta);
  };

  #render = delta => {
    this.field.draw(delta);
    this.#menu.draw(delta);
  };

  cellIntersectingWithObstacles(snake, coords) {
    const cell = this.field.getCell(coords);

    if (cell && !Food.isFood(cell)) {
      return this.#gameOver(snake);
    }

    if (this.field.endless) {
      return false;
    } else {
      if (this.coorsOutsideField(coords)) {
        return this.#gameOver(snake);
      }
    }

    return false;
  }

  #gameOver = snake => {
    if (this.field.snakes.length > 1) {
      this.field.killSnake(snake);
    } else {
      this.#isGameOver = true;
      this.stop();
      this.#onTickEnd(this.field.gameOver);
      Score.checkScore(this.field.snakes[0].score);
    }

    return true;
  };

  #onTickEnd = callback => {
    if (callback) {
      this.#onTickEndCallbacks.push(callback);
    } else {
      this.#onTickEndCallbacks.forEach(cb => cb());
      this.#onTickEndCallbacks = [];
    }
  };

  coorsOutsideField(coords) {
    return coords.x < 0 || coords.x >= this.field.width || coords.y < 0 || coords.y >= this.field.height;
  }
}
