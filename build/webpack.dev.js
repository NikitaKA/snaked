const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const config = require('../config');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  devServer: {
    hot: true,
    host: config.dev.host,
    port: config.dev.port,
    contentBase: path.join(__dirname, '../dist'),
    stats: {
      colors: true,
      modules: false
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]
});
