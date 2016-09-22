'use strict';

const wrapper = (path, filename = '[name].js', publicPath = '/') => ({
  output: {
    path,
    filename,
    publicPath,
  },
});

module.exports = wrapper;
