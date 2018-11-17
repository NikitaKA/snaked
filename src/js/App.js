import Snaked, * as states from './Snaked';
import Controls from './Controls';
import Field from './Field';
import Snake from './Snake';

const canvas = document.getElementById('app');
const field = new Field(canvas, { width: 20, height: 20, cellSize: 10, endless: true });
const controls = new Controls();

let game = new Snaked(field, controls, { debug: true });

window.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    switch (game.state) {
      case states.STATE_INITIALIZED:
        game.meetSnake(new Snake({ speed: 100 }));
        game.start();

        break;
    }
  }
});
