'use strict';

const path = require('path');
const { filter, isEmpty, complement } = require('ramda');

const notEmpty = filter(complement(isEmpty));
const hasLoader = seek => loader => loader.loaders.includes(seek);

const baseProvider = () => ({
  entry: {},
  output: {},
  resolve: {
    extensions: [''],
  },
  module: {
    preLoaders: [],
    loaders: [],
    postLoaders: [],
  },
  plugins: [],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
});

const baseServerProvider = provider => ({
  hot: true,
  historyApiFallback: true,
  compress: true,
  quiet: true,
  noInfo: false,
  stats: { colors: true },
  publicPath: provider.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 50,
  },
});

module.exports = {
  hasLoader,
  notEmpty,
  baseProvider,
};
