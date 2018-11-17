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

    this.field.app = this;
    this.controls.app = this;
  }

  start() {
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

    this.reqAnimationFrame = window.requestAnimationFrame(this.tick);
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
    this.snakes.forEach(snake => snake.tick(delta));
  }

  render(delta) {
    this.field.draw(delta);
  }
}
