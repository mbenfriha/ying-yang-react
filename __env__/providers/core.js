'use strict';

module.exports = {
  entry: {
    app: ['./client/index.js', './client/style.css'],
    vendor: ['react', 'ramda'],
  },
  port: 3000,
  assets_url: '/',
  assets_path: './dist/',
  refresh: ['index.html'],
  autoprefixer: ['last 2 versions', 'ie > 8'],
};
