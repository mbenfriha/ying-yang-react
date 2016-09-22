'use strict';

const { optimize: { CommonsChunkPlugin } } = require('webpack');

const wrapper = () =>
  new CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.[chunkhash:8].js',
  });

module.exports = wrapper;
