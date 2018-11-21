import Snaked from './Snaked';
import Field from './Field';

let envConfig = {};

try {
  envConfig = Object.assign(envConfig, require('../../env'));
} catch (e) {}

const canvas = document.getElementById('app');
const field = new Field(canvas, envConfig);

let game = new Snaked(field, envConfig);

game.start();

window.Snaked = game;
