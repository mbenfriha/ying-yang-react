'use strict';

const { notEmpty } = require('../helpers');
const { LoaderOptionsPlugin } = require('webpack');

const {
  pipe,
  reduce,
  map,
  prop,
  flatten,
  uniq,
  flip,
  call,
  mergeAll,
  curry,
  uncurryN,
} = require('ramda');

const mapProp = x => map(prop(x));

const ext = pipe(
  mapProp('ext'),
  flatten,
  uniq,
  reduce(({ resolve: { extensions } }, key) =>
    ({ resolve: { extensions: [...extensions, key] } }), { resolve: { extensions: [] } }
  )
);

const wrap = pipe(
  mapProp('wrapper'),
  notEmpty,
  mergeAll
);

const pre = pipe(
  mapProp('pre'),
  notEmpty,
  reduce((loaders, obj) => [...loaders, Object.assign(obj, { enforce: 'pre' })], [])
);

const loader = pipe(
  mapProp('loader'),
  notEmpty,
  reduce((loaders, obj) => [...loaders, obj], [])
);

const post = pipe(
  mapProp('post'),
  notEmpty,
  reduce((loaders, obj) => [...loaders, Object.assign(obj, { enforce: 'post' })], [])
);

const applyLoaders = loaders => provider =>
  mergeAll([
    provider,
    ext(loaders),
    {
      module: {
        loaders: [...pre(loaders), ...loader(loaders), ...post(loaders)],
      },
    },
  ]);

const applyMixins = mixins => provider => mergeAll([provider, ...mixins]);

const applyPlugins = (options, plugins) => provider =>
  mergeAll([provider, {
    plugins: [
      ...flatten(plugins.map(flip(curry(call))(provider))),
      new LoaderOptionsPlugin({
        minimize: true,
        options: Object.assign({ context: __dirname }, options),
      }),
    ],
  }]);

const provide = provider => mixins => loaders => plugins =>
  applyPlugins(wrap(loaders), plugins)(applyLoaders(loaders)(applyMixins(mixins)(provider)));

/**
 * Public API - WebPack configuration builder
 * Use it in your environment
 * @param {Object}          provider
 * @param {Array<Object>}   mixins
 * @param {Array<Object>}   loaders
 * @param {Array<Function>} plugins
 */
const builder = uncurryN(4, provide);

module.exports = builder;
