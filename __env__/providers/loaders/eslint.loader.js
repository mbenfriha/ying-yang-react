'use strict';

const formatter = require('eslint-friendly-formatter');

const ext = ['.js', '.jsx'];

const wrapper = {
  eslint: {
    configFile: '.eslintrc',
    formatter,
  },
};

const pre = {
  test: /\.(js|jsx)$/,
  loaders: ['eslint'],
  exclude: [/node_modules/],
};

const loader = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
};
