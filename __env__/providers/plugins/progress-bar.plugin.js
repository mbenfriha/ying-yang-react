'use strict';

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const wrapper = () => provider => new ProgressBarPlugin();

module.exports = wrapper;
