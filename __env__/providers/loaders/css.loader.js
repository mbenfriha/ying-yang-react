'use strict';

const ext = ['.css'];

const wrapper = {
  postcss: [
    require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
    require('css-mqpacker')(),
  ],
};

const pre = {};

const loader = {
  test: /\.css$/,
  loaders: ['css', 'csscomb', 'postcss'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
