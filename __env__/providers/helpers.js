'use strict';

const path = require('path');

module.exports = {
  root(...args) {
    return path.join(__dirname, ...args);
  },
  loaderPredicate(include = 'css') {
    return loader => loader.loaders && loader.loaders.includes(include);
  },
};
