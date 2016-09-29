'use strict';

const { DefinePlugin } = require('webpack');

const wrapper = (env, extra = {}) => provider =>
  new DefinePlugin(
    Object.assign(
      { 'process.env.NODE_ENV': JSON.stringify(env) },
      { NODE_ENV: JSON.stringify(env) },
      { ENV: JSON.stringify(env) },
      { METADATA: JSON.stringify(extra) }
    )
  );

module.exports = wrapper;
