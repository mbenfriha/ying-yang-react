'use strict';

const path = require('path');
const { filter, isEmpty, complement, cond, always, lt, gt, T } = require('ramda');

const notEmpty = filter(complement(isEmpty));

const sort = cond([
  [lt, always(1)],
  [gt, always(-1)],
  [T, always(0)],
]);

const hasLoader = seek => loader =>
  loader.loaders ? loader.loaders.includes(seek) : loader.loader === seek;

const baseProvider = () => ({
  entry: {},
  output: {},
  resolve: {
    extensions: [],
  },
  module: {
    loaders: [],
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
  notEmpty,
  sort,
  hasLoader,
  baseProvider,
};
