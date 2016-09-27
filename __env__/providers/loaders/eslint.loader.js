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
  loader: 'eslint',
  exclude: [/node_modules/],
};

const loader = {};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
