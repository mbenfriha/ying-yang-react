'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const core = require('./core');

const postcss = [
  require('autoprefixer')({ browsers: core.autoprefixer }),
  require('css-mqpacker')(),
];

const configuration = {
  context: core.root,
  entry: core.entry,
  output: {
    path: core.assets_path,
    filename: '[name].js',
    publicPath: core.assets_url,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json'],
    modules: [core.root, 'node_modules'],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: [/node_modules/, /__env__/],
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          // 'react-hot',
          'babel',
        ],
        exclude: [/node_modules/, /__env__/],
      },
      {
        test: /\.css$/,
        loaders: ['css', 'postcss'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10,
          name: '[name].[hash:7].[ext]',
        },
      },
    ],
  },
  postcss,
  plugins: [],
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  },
};

configuration.plugins.push(
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true,
  })
);

module.exports = configuration;
