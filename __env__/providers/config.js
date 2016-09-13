'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const core = require('./core');

const postcss = [
  require('autoprefixer')({ browsers: core.autoprefixer }),
  require('css-mqpacker')(),
];

module.exports = {
  entry: core.entry,
  output: {
    path: core.assets_path,
    filename: '[name].js',
    publicPath: core.assets_url,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json'],
    alias: {
      root: helpers.root('../../client/'),
    },
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        exclude: [/node_modules/],
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          // 'react-hot',
          'babel',
        ],
        exclude: [/node_modules/],
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
  babel: {
    babelrc: helpers.root('../../client/.babelrc'),
  },
  postcss,
  eslint: {
    configFile: helpers.root('../../.eslintrc'),
    formatter: require('eslint-friendly-formatter'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: helpers.root('../../client/index.html'),
      inject: true,
      minify: true,
    })
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
};
