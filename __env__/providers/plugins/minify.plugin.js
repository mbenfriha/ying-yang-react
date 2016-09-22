'use strict';

const { LoaderOptionsPlugin, optimize: { UglifyJsPlugin } } = require('webpack');
const { of } = require('ramda');

const wrapper = () => provider =>
  of([
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    })
  ]);

module.exports = wrapper;
