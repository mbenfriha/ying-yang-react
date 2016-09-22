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
  loaders: ['css', 'postcss', 'csscomb'],
};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
};
