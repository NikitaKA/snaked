import Snaked from './Snaked';
import Controls from './Controls';
import Field from './Field';
import Snake from './Snake';

const canvas = document.getElementById('app');
const field = new Field(canvas, { width: 20, height: 20, cellSize: 10, endless: true });
const controls = new Controls();

let game = new Snaked(field, controls, { debug: true });

game.meetSnake(new Snake({ speed: 100 }));
game.start();
