const fs = require('fs');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const { CallbackTask } = require('event-hooks-webpack-plugin/lib/tasks');
const { resolve } = require('../build/utils');

const spritesDir = resolve('/src/sprites');

let config = require('./webpack.base'); // It's a workaround if directory doesn't exist
let files = [];

function getSprites() {
  let sprites = {};

  fs.readdirSync(spritesDir)
    .filter(file => file.match(/\.svg/))
    .forEach(file => {
      const filename = file.split('.');

      filename.pop();

      files.push(resolve('/src/' + filename + '.js'));
      sprites[filename] = resolve('/src/sprites/' + file);
    });

  return sprites;
}

if (fs.existsSync(spritesDir)) {
  config = {
    entry: getSprites(),
    output: {
      path: resolve('/src')
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            spriteFilename: 'assets/images/sprite.svg'
          }
        }
      ]
    },
    plugins: [
      new SpriteLoaderPlugin(),
      new EventHooksPlugin({
        done: new CallbackTask((compiler, callback) => {
          files.forEach(file => {
            fs.unlinkSync(file);
          });

          callback();
        })
      })
    ]
  };
}

module.exports = config;
