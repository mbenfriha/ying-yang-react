'use strict';

const { notEmpty } = require('../helpers');

const {
  pipe,
  reduce,
  map,
  prop,
  flatten,
  uniq,
  mergeAll,
} = require('ramda');

const ext = pipe(
  map(prop('ext')),
  flatten,
  uniq,
  reduce(({resolve: { extensions }}, key) => ({ resolve: { extensions: [...extensions, key] } }), { resolve: { extensions: [] } })
);

const wrap = pipe(
  map(prop('wrapper')),
  notEmpty,
  mergeAll
);

const pre = pipe(
  map(prop('pre')),
  notEmpty,
  reduce(({ preLoaders }, obj) => ({ preLoaders: [...preLoaders, obj] }), { preLoaders: [] })
);

const loader = pipe(
  map(prop('loader')),
  notEmpty,
  reduce(({ loaders }, obj) => ({ loaders: [...loaders, obj] }), { loaders: [] })
);

const post = pipe(
  map(prop('post')),
  notEmpty,
  reduce(({ postLoaders }, obj) => ({ postLoaders: [...postLoaders, obj] }), { postLoaders: [] })
);

const buildLoaders = loaders =>
  mergeAll([
    ext(loaders),
    wrap(loaders),
    {
      module: mergeAll([pre(loaders), loader(loaders), post(loaders)]),
    },
  ]);

const applyMixins = mixins => mergeAll(mixins);

const applyPlugins = plugins => ({ plugins: flatten(plugins) });

const provide = mixins => loaders => plugins => provider => mergeAll([applyMixins(mixins), buildLoaders(loaders), applyPlugins(plugins)]);

const builder = (provider, mixins, loaders, plugins) => {
  const hey = provide(mixins)(loaders)(plugins)(provider);

  return hey;
};

module.exports = builder;
