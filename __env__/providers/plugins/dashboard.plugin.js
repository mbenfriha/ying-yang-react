'use strict';

const DashboardPlugin = require('webpack-dashboard/plugin');

const wrapper = () => provider => new DashboardPlugin();

module.exports = wrapper;
