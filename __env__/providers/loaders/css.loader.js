'use strict';

const ext = ['.css'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.css$/,
  loaders: ['css', 'postcss', 'csscomb'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};

// ['last 2 versions', 'ie > 8']
