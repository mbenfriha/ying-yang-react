'use strict';

const ext = ['.js', '.jsx'];

const wrapper = {
  babel: {
    babelrc: '.babelrc',
  },
};

const pre = {};

const loader = {
  test: /\.(js|jsx)$/,
  loaders: ['babel'],
  exclude: [/node_modules/],
};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
};
