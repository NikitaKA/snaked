import { drawText, DRAWTEXT_ALIGN_CENTER } from './Utils';

export default class Menu {
  #ctx = null;
  #title = '';
  #options = [];
  #msPassed = 0;
  #isVisible = false;
  #currentOption = 0;

  #hue = 0;
  #hueDirection = 1;
  #hueStep = 1;

  constructor(ctx, { animationSpeed = 0 } = {}) {
    this.#ctx = ctx;

    this.animationSpeed = animationSpeed;

    this.init();
  }

  init() {
    window.addEventListener('keypress', e => {
      this.keyPress(e);
    });

    window.addEventListener('keydown', e => {
      this.keyDown(e);
    });
  }

  keyPress(e) {
    if (!this.#isVisible) {
      return;
    }

    switch (e.code) {
      case 'Enter':
        this.#options[this.#currentOption].func();

        break;
    }
  }

  keyDown(e) {
    if (!this.#isVisible) {
      return;
    }

    switch (e.code) {
      case 'ArrowUp':
        this.#currentOption--;

        if (this.#currentOption < 0) {
          this.#currentOption = this.#options.length - 1;
        }

        this.updateOptions();

        break;

      case 'ArrowDown':
        this.#currentOption++;

        if (this.#currentOption > this.#options.length - 1) {
          this.#currentOption = 0;
        }

        this.updateOptions();

        break;
    }
  }

  set({ title = '', options = [] } = {}) {
    this.#title = title;
    this.#options = options;

    this.#options.forEach((option, index) => {
      option.font = index === this.#currentOption ? 'bold 12px Arial' : '12px Arial';
      option.color = index === this.#currentOption ? `hsl(${this.#hue},100%,50%)` : 'black';
      option.height = 12;
      option.paddingBottom = index === this.#options.length - 1 ? 0 : 4;
    });
  }

  updateOptions() {
    this.#hue = 0;

    this.#options.forEach((option, index) => {
      if (index === this.#currentOption) {
        option.font = 'bold 12px Arial';
        option.color = `hsl(${this.#hue},100%,50%)`;
      } else {
        option.font = '12px Arial';
        option.color = 'black';
      }
    });
  }

  tick(delta) {
    this.#msPassed += delta;

    if (this.animationSpeed) {
      this.#deTick(this.#update);
    } else {
      this.#update();
    }
  }

  #deTick = callback => {
    if (this.#msPassed >= this.animationSpeed) {
      this.#msPassed = this.#msPassed - this.animationSpeed;

      callback();

      this.#deTick(callback);
    }
  };

  #update = () => {
    this.#hue += this.#hueStep * this.#hueDirection;

    if (this.#hue > 255) {
      this.#hueDirection *= -1;
      this.#hue = 255;
    }
    if (this.#hue < 0) {
      this.#hueDirection *= -1;
      this.#hue = 0;
    }

    this.#options[this.#currentOption].color = `hsl(${this.#hue},100%,50%)`;
  };

  draw() {
    if (this.#isVisible) {
      drawText(this.#ctx, {
        align: DRAWTEXT_ALIGN_CENTER,
        padding: 10,
        bgcolor: '#ffffff',
        bgAlpha: 0.75,
        lines: [{ font: 'bold 14px Arial', height: 14, text: this.#title, paddingBottom: 6 }, ...this.#options]
      });
    }
  }

  show() {
    this.#hue = 0;
    this.#isVisible = true;
  }

  hide() {
    this.#isVisible = false;
  }
}
