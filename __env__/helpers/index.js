'use strict';

const path = require('path');
const { port } = require('./config');

const wrap = (...args) => Object.assign({}, ...args);

const root = (...args) => path.join(__dirname, ...args);

const isLoader = include => loader => loader.loaders && loader.loaders.includes(include);

const listen = (webpackServer, host, port) =>
  new Promise((resolve, reject) =>
    webpackServer.listen(port, host, error => {
      if (error) {
        return reject({ errors: [error] });
      }

      return resolve(`===> Server started on http://${host}:${port}`);
    })
  );

const provideServer = (provider, port) =>
  Object
    .keys(provider.entry)
    .forEach(k => provider.entry[k].unshift(`webpack-dev-server/client?http://0.0.0.0:${port}`, 'webpack/hot/only-dev-server'));

module.exports = {
  wrap,
  root,
  isLoader,
  listen,
  provideServer,
};
