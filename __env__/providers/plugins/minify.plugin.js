'use strict';

const { optimize: { UglifyJsPlugin } } = require('webpack');

const wrapper = () => provider =>
  new UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    comments: false,
  });

module.exports = wrapper;
