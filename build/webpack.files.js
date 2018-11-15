const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getRootTemplates, resolve } = require('../build/utils');

// Specify bundles for entries
let { bundles } = require('../config');

getRootTemplates().map(({ file, filename }) => {
  bundles[filename] = bundles[filename] || [];
});

Object.entries(bundles).forEach(([key, value]) => {
  if (!~value.indexOf('main')) {
    bundles[key].unshift('main');
  }
});

let scripts = {};

// Create entries for each .js file in /js/ directory
glob.sync(path.resolve(__dirname, '../src/js/**/*.js')).forEach(file => {
  if (!file.match(/\.part\.js$/)) {
    const filePath = file.replace(/^.+\/src\//, '');
    const entryName = filePath
      .replace('js/', '')
      .replace(/\.js$/, '')
      .replace(/\//g, '-');

    scripts[entryName] = filePath;
  }
});

function getEntries() {
  let entries = {};

  Object.keys(scripts).map(entry => {
    const pathWithoutExt = scripts[entry].replace(/\..+?$/, '');

    entries[pathWithoutExt] = resolve('/src/' + scripts[entry]);
  });

  return entries;
}

function getChunks(filename) {
  return bundles[filename].map(bundle => scripts[bundle].replace(/\..+?$/, ''));
}

function getPages() {
  let pages = [];

  getRootTemplates().forEach(({ file, filename }) => {
    pages.push(
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve(`/src/${file}`),
        filename: `${filename}.html`,
        chunks: getChunks(filename),
        minify: false
      })
    );
  });

  return pages;
}

module.exports = {
  entry: getEntries(),
  plugins: getPages()
};
