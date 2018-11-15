const fs = require('fs');
const path = require('path');

const getRootTemplates = function() {
  return fs
    .readdirSync(resolve('/src'))
    .filter(file => file.match(/\.pug$/))
    .map(file => {
      return {
        file,
        filename: file.replace(/\.pug$/, '')
      };
    });
};

const resolve = function(path_to = '/') {
  return path.join(__dirname, '..', path_to);
};

module.exports = {
  getRootTemplates,
  resolve
};
