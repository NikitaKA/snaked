const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('../build/utils');

const filesWebpackConfig = require('./webpack.files');

const development = !!process.env.npm_lifecycle_script.match('--mode development');

const plugins = [
  new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..'), verbose: true }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
  new MiniCssExtractPlugin({
    filename: 'css/style.css'
  }),
  new CopyWebpackPlugin([
    {
      from: resolve('/src/static'),
      to: resolve('/dist')
    }
  ])
];

if (development) {
  plugins.shift();
}

module.exports = merge(filesWebpackConfig, {
  output: {
    path: resolve('/dist'),
    filename: '[name].js'
  },
  resolve: {
    modules: [resolve('/src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: development ? 'style-loader' : MiniCssExtractPlugin.loader,
            options: development
              ? {}
              : {
                  publicPath: '../'
                }
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'resolve-url-loader'
          },
          'sass-loader'
        ]
      },
      {
        test: /\.pug/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: '[path]/[name].[ext]'
        }
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: development,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'js/vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins
});
