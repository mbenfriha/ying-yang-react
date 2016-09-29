'use strict';

const { ProvidePlugin } = require('webpack');

const wrapper = options => provider => new ProvidePlugin(options);

module.exports = wrapper;
