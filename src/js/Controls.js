import * as states from './Snaked';

export const DIRECTION_LEFT = 'DIRECTION_LEFT';
export const DIRECTION_RIGHT = 'DIRECTION_RIGHT';
export const DIRECTION_UP = 'DIRECTION_UP';
export const DIRECTION_DOWN = 'DIRECTION_DOWN';

export default class Controls {
  constructor({ left = 'ArrowLeft', right = 'ArrowRight', up = 'ArrowUp', down = 'ArrowDown' } = {}) {
    this.app = null;
    this.direction = null;

    this.keysPressed = {};

    this.kLeft = left;
    this.kRight = right;
    this.kUp = up;
    this.kDown = down;

    this.init();
  }

  init() {
    window.addEventListener('keydown', e => {
      if (this.app.state === states.STATE_PAUSED || this.app.state === states.STATE_STOPPED) {
        return false;
      }

      this.keyDown(e);
    });

    window.addEventListener('keyup', e => {
      if (this.app.state === states.STATE_PAUSED || this.app.state === states.STATE_STOPPED) {
        return false;
      }

      this.keyUp(e);
    });
  }

  keyDown(e) {
    this.keysPressed[e.code] = performance.now();

    this.selectDirection();
  }

  keyUp(e) {
    this.keysPressed[e.code] = 0;

    this.selectDirection();
  }

  selectDirection() {
    let latestKey = null;
    let latestKeyTime = 0;

    Object.keys(this.keysPressed).forEach(key => {
      const keyTime = this.keysPressed[key];

      if ((!latestKeyTime && keyTime) || (latestKeyTime && keyTime && keyTime > latestKeyTime)) {
        latestKey = key;
        latestKeyTime = keyTime;
      }
    });

    switch (latestKey) {
      case this.kLeft:
        this.direction = DIRECTION_LEFT;
        break;
      case this.kRight:
        this.direction = DIRECTION_RIGHT;
        break;
      case this.kUp:
        this.direction = DIRECTION_UP;
        break;
      case this.kDown:
        this.direction = DIRECTION_DOWN;
        break;

      default:
    }
  }
}
