'use strict';

const ext = ['.json'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.json$/,
  loader: 'file',
  exclude: [/node_modules/],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
