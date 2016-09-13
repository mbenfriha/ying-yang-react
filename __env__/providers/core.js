'use strict';

const helpers = require('./helpers');

module.exports = {
  root: helpers.root('../../client/'),
  entry: {
    app: ['./index.js', './style.css'],
    vendor: ['react', 'ramda'],
  },
  port: 3000,
  assets_url: '/',
  assets_path: './dist/',
  refresh: ['index.html'],
  autoprefixer: ['last 2 versions', 'ie > 8'],
};
