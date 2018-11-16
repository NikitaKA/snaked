import * as states from './Snaked';

export const DIRECTION_LEFT = 'DIRECTION_LEFT';
export const DIRECTION_RIGHT = 'DIRECTION_RIGHT';
export const DIRECTION_UP = 'DIRECTION_UP';
export const DIRECTION_DOWN = 'DIRECTION_DOWN';

export default class Controls {
  constructor() {
    this.direction = null;
    this.app = null;

    this.init();
  }

  init() {
    window.addEventListener('keydown', e => {
      if (this.app.state !== states.STATE_RUNNING) {
        return false;
      }

      switch (e.code) {
        case 'ArrowLeft':
          this.direction = DIRECTION_LEFT;
          break;
        case 'ArrowRight':
          this.direction = DIRECTION_RIGHT;
          break;
        case 'ArrowUp':
          this.direction = DIRECTION_UP;
          break;
        case 'ArrowDown':
          this.direction = DIRECTION_DOWN;
          break;

        default:
      }
    });
  }
}
