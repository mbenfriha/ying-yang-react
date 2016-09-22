'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { cond, always, lt, gt, T } = require('ramda');

const sort = cond([
  [lt, always(1)],
  [gt, always(-1)],
  [T, always(0)],
]);

const wrapper = template =>
  new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: true,
    chunksSortMode: (a, b) => sort(a.names[0], b.names[0]),
    template,
  });

module.exports = wrapper;
