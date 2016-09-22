'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const wrapper = (filename, template) =>
  new HtmlWebpackPlugin({
    filename,
    template,
    inject: true,
    chunksSortMode: (a, b) => {
      if (a.names[0] < b.names[0]) {
        return 1;
      }

      if (a.names[0] > b.names[0]) {
        return -1;
      }

      return 0;
    },
  });

module.exports = wrapper;
