'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { root } = require('./helpers');
const { entry, baseUrl: publicPath, output: path, autoprefixer: browsers } = require('./config');

const postcss = [
  require('autoprefixer')({ browsers }),
  require('css-mqpacker')(),
];

const eslint = {
  configFile: root('../../.eslintrc'),
  formatter: require('eslint-friendly-formatter'),
};

const babel = {
  babelrc: root('../../client/.babelrc'),
};

module.exports = {
  entry,
  output: {
    path,
    filename: '[name].js',
    publicPath,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json'],
    alias: {
      root: root('../../client/'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        loaders: ['css', 'postcss'],
      },
      {
        test: /\.json$/,
        loaders: 'file',
        exclude: [/node_modules/],
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: root('../../client/index.html'),
      inject: true,
      chunksSortMode: (a, b) => {
        if (a.names[0] < b.names[0]) {
          return 1;
        }

        if (a.names[0] > b.names[0]) {
          return -1;
        }

        return 0;
      },
    }),
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  babel,
  postcss,
  eslint,
};
