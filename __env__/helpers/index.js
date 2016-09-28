'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
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
  devServer: {},
});

const devServerProvider = publicPath => ({
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  historyApiFallback: true,
  compress: true,
  quiet: true,
  noInfo: false,
  stats: { colors: true },
  publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 50,
  },
});

const listen = baseProvider => (host, port) =>
  new Promise((resolve, reject) =>
    (new WebpackDevServer(webpack(baseProvider), devServerProvider(`http://${host}:${port}`)))
      .listen(port, host, error =>
        error ? reject(`===> Server can't start : ${error}`) : resolve(`===> Server started on http://${host}:${port}`)
      )
  );

module.exports = {
  notEmpty,
  sort,
  hasLoader,
  baseProvider,
  devServerProvider,
  listen,
};
