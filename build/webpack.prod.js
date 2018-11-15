const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base');
const webpackSpritesConfig = require('./webpack.sprites');

module.exports = [
  webpackSpritesConfig,
  merge(webpackBaseConfig, {
    stats: {
      colors: true,
      modules: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      env: true
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  })
];
