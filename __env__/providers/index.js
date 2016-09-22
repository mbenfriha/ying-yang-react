'use strict';

const { notEmpty } = require('../helpers');

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

const ext = pipe(
  map(prop('ext')),
  flatten,
  uniq,
  reduce(({ resolve: { extensions } }, key) =>
    ({ resolve: { extensions: [...extensions, key] } }), { resolve: { extensions: [] } }
  )
);

const wrap = pipe(
  map(prop('wrapper')),
  notEmpty,
  mergeAll
);

const pre = pipe(
  map(prop('pre')),
  notEmpty,
  reduce(({ preLoaders }, obj) =>
    ({ preLoaders: [...preLoaders, obj] }), { preLoaders: [] }
  )
);

const loader = pipe(
  map(prop('loader')),
  notEmpty,
  reduce(({ loaders }, obj) =>
    ({ loaders: [...loaders, obj] }), { loaders: [] }
  )
);

const post = pipe(
  map(prop('post')),
  notEmpty,
  reduce(({ postLoaders }, obj) =>
    ({ postLoaders: [...postLoaders, obj] }), { postLoaders: [] }
  )
);

const applyLoaders = loaders => provider =>
  mergeAll([
    provider,
    ext(loaders),
    wrap(loaders),
    {
      module: mergeAll([pre(loaders), loader(loaders), post(loaders)]),
    },
  ]);

const applyMixins = mixins => provider => mergeAll([provider, ...mixins]);

const applyPlugins = plugins => provider =>
  mergeAll([provider, { plugins: flatten(plugins.map(flip(curry(call))(provider))) }]);

const provide = provider => mixins => loaders => plugins =>
  applyPlugins(plugins)(applyLoaders(loaders)(applyMixins(mixins)(provider)));

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
