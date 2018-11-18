import * as states from './Snaked';

export const DIRECTION_LEFT = 'DIRECTION_LEFT';
export const DIRECTION_RIGHT = 'DIRECTION_RIGHT';
export const DIRECTION_UP = 'DIRECTION_UP';
export const DIRECTION_DOWN = 'DIRECTION_DOWN';

export default class Controls {
  constructor() {
    this.app = null;
    this.direction = null;

    this.keysPressed = {};

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

    window.addEventListener('keypress', e => {
      this.appControl(e);
    });

    window.addEventListener('blur', () => {
      this.app.stop();
    });

    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.app.start();
      } else {
        this.app.stop();
      }
    });

    window.addEventListener('focus', () => {
      this.app.start();
    });
  }

  appControl(e) {
    switch (e.code) {
      case 'Space':
        switch (this.app.state) {
          case states.STATE_RUNNING:
            this.app.pause();
            break;

          case states.STATE_PAUSED:
            this.app.start();
            break;
        }

        break;

      case 'Enter':
        if (this.app.state === states.STATE_STOPPED) {
          this.app.start();
        } else {
          this.app.stop();
        }
    }
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
  }
}
