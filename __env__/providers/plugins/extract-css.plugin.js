'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { hasLoader } = require('../../helpers');

const wrapper = filename => provider => {
  provider
    .module
    .loaders
    .filter(hasLoader('css'))
    .forEach(loader => {
      let key;

      if (loader.loaders) {
        key = 'loaders';
      } else {
        key = 'loader';
      }

      loader.loader = ExtractTextPlugin.extract(loader[key]);

      delete loader[key];
    });

  return new ExtractTextPlugin(filename);
};

module.exports = wrapper;
