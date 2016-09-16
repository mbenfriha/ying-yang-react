'use strict';

module.exports = {
  entry: {
    vendor: ['./client/vendor.js'],
    app: ['./client/index.js', './client/critical.css'],
  },
  port: 3000,
  baseUrl: '/',
  output: './dist/',
  refresh: ['index.html'],
  autoprefixer: ['last 2 versions', 'ie > 8'],
  extraGlobalPlugins: {},
};
