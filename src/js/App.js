import Controls from './Controls';
import Field from './Field';
import Snake from './Snake';

class Snaked {
  constructor(field, controls) {
    this.field = field;
    this.controls = controls;
    this.snakes = [];

    this.start();
  }

  start() {
    this.snakes.push(new Snake(this.field, this.controls, { speed: 1 }));

    this.field.addSnakes(this.snakes);

    this.snakes.forEach(snake => snake.spawn());

    setInterval(this.tick, 50);
  }

  tick = () => {
    this.snakes.forEach(snake => snake.tick());

    this.field.draw();
  };
}

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('app');
  const field = new Field(canvas, { width: 20, height: 20, cellSize: 10, endless: true });
  const controls = new Controls();

  new Snaked(field, controls);
});
