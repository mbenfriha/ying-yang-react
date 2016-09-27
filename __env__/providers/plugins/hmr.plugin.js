'use strict';

const { HotModuleReplacementPlugin } = require('webpack');

const wrapper = () => provider => new HotModuleReplacementPlugin();

module.exports = wrapper;
