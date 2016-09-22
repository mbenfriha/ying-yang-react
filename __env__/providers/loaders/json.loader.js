'use strict';

const ext = ['.json'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.json$/,
  loaders: ['file'],
  exclude: [/node_modules/],
};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
};
