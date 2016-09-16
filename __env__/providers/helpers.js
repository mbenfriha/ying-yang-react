'use strict';

const path = require('path');

module.exports = {
  root(...args) {
    return path.join(__dirname, ...args);
  },
  isLoader(include) {
    return loader => loader.loaders && loader.loaders.includes(include);
  },
  listen(webpackServer, host, port) {
    return new Promise((resolve, reject) =>
      webpackServer.listen(port, host, error => {
        if (error) {
          return reject({ errors: [error] });
        }

        return resolve(`===> Server started on http://${host}:${port}`);
      })
    );
  },
  provideServer(provider) {
    Object
      .keys(provider.entry)
      .forEach(k => provider.entry[k].unshift('webpack/hot/only-dev-server'));
  },
};
