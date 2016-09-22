'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { hasLoader } = require('../../helpers');

const wrapper = filename => provider => {
  provider
    .module
    .loaders
    .filter(hasLoader('css'))
    .forEach(loader => {
      loader.loader = ExtractTextPlugin.extract(loader.loaders);

      delete loader['loaders'];
    });

  return new ExtractTextPlugin(filename);
};

module.exports = wrapper;
