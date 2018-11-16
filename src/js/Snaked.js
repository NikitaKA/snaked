export const STATE_INITIALIZED = 'STATE_INITIALIZED';
export const STATE_RUNNING = 'STATE_RUNNING';
export const STATE_PAUSED = 'STATE_PAUSED';

export default class Snaked {
  constructor(field, controls) {
    this.field = field;
    this.controls = controls;
    this.snakes = [];
    this.state = STATE_INITIALIZED;
    this.reqAnimationFrame = null;

    this.delta = 0;
    this.then = 0;

    this.controls.app = this;
  }

  start() {
    if (this.state === STATE_INITIALIZED) {
      this.field.addSnakes(this.snakes);
      this.snakes.forEach(snake => snake.spawn());
    }

    this.state = STATE_RUNNING;

    this.then = performance.now();

    this.reqAnimationFrame = window.requestAnimationFrame(this.tick);
  }

  pause() {
    window.cancelAnimationFrame(this.reqAnimationFrame);

    this.state = STATE_PAUSED;
  }

  tick = now => {
    this.setDelta(now);
    this.update();
    this.render();

    this.reqAnimationFrame = window.requestAnimationFrame(this.tick);
  };

  meetSnake(snake) {
    snake.field = this.field;
    snake.controls = this.controls;

    this.snakes.push(snake);
  }

  setDelta(now) {
    this.delta = now - this.then;
    this.then = now;
  }

  update() {
    this.snakes.forEach(snake => snake.tick(this.delta));
  }

  render() {
    this.field.draw();
  }
}
