import Snaked from './Snaked';
import Field from './Field';

const canvas = document.getElementById('app');
const field = new Field(canvas, { width: 20, height: 20, cellSize: 10 });

let game = new Snaked(field, { debug: true });

game.start();
