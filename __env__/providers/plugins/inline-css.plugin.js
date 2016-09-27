'use strict';

const { hasLoader } = require('../../helpers');

const wrapper = () => provider => {
  provider
    .module
    .loaders
    .filter(hasLoader('css'))
    .forEach(loader => {
      loader.loaders = ['style', ...loader[loader.loaders ? 'loaders' : 'loader']];
    });

  return () => ({});
};

module.exports = wrapper;
