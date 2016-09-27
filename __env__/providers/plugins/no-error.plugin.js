'use strict';

const { NoErrorsPlugin } = require('webpack');

const wrapper = () => provider => new NoErrorsPlugin();

module.exports = wrapper;
