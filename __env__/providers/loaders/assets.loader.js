'use strict';

const ext = [];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
  loaders: ['url'],
  query: {
    limit: 10,
    name: '[name].[hash:7].[ext]',
  },
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
