'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { sort } = require('../../helpers');

const wrapper = template => provider =>
  new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: true,
    chunksSortMode: (a, b) => sort(a.names[0], b.names[0]),
    template,
  });

module.exports = wrapper;
