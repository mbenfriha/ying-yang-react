'use strict';

const wrapper = (publicPath, filename = '[name].js', path = '/') => ({
  output: {
    path,
    publicPath,
    filename,
  },
});

module.exports = wrapper;

