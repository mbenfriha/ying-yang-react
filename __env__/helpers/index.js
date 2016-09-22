'use strict';

const path = require('path');
const { filter, isEmpty, complement } = require('ramda');

const notEmpty = filter(complement(isEmpty));
const hasResolvers = resolvers => provider => resolvers.every(provider.resolve.extensions.includes);
const hasLoader = loader => provider => provider.loaders.includes(loader);
const hasPreLoader = preLoader => provider => provider.preLoaders.includes(preLoader);

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
  hasResolvers,
  hasLoader,
  hasPreLoader,
  notEmpty,
  baseProvider,
};
