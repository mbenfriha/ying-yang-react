# ying-yang-react

![](http://image.noelshack.com/fichiers/2016/37/1473789222-sucess.jpg)

![](http://image.noelshack.com/fichiers/2016/37/1473789284-screen-1.jpg)

[![Build Status](https://travis-ci.org/kMeillet/ying-yang-react.svg?branch=master)](https://travis-ci.org/kMeillet/ying-yang-react)

React Ying Yang consist on a React boilerplate who can pretend to consume any API and make component testable and re-usable.

We will produce a boilerplate with 3 way :

- Simple and elegant.
- Use latest package.
- If you need more, do it.

Warning : if you need isomorphic code (client-side / server-side), move to iso-ying-yang-react package.

# Content

- WebPack 2 with dev/prod configuration, 3-shaking, multiple loader/plugins.
- HMR with React Hot Loader.
- Perfect CSS support : Autoprefixer + CSS mqPacker + CSS Comb.
- Axios (Http Request).
- Jest & Enzyme (Testing).
- Selenium Web Driver (E2E).
- Babel stage-0 + Decorator plugin (for productive code).
- Flow (Type).
- EsLint (with AirBnB configuration).
- Ramda (FP).
- React with : react-dom, react-router, react-redux.
- Redux with : redux-form, redux-saga, redux-thunk.
- Support for Redux DevTools : https://github.com/zalmoxisus/redux-devtools-extension

# Install

You need Node.js >= 6 and NPM >= 3.

```sh
git clone https://github.com/kMeillet/ying-yang-react
cd ying-yang-react/
npm i
```

# Script

### Run server (dev)

```sh
npm start
```

### Run build (prod)

```sh
npm run build
```

### Run test (Jest)

```sh
npm run test
```

### Run test (Jest) watch server

```sh
npm run test:watch
```

### Run E2E test (Selenium)

```sh
npm run e2e
```

### Run test suite (Jest + Selenium)

```sh
npm run suite
```

### Deploy

```sh
npm run publish
```

### Update packages

```sh
npm run updates
```

# FAQ

### New router ?

React Router v4 doc : https://github.com/ReactTraining/react-router/blob/v4/README.md

### Why are you using Decorators ? Spec can change and break code !

If you don't need decorators :
 
- Remove "transform-decorators" in .babelrc file.
- Remove "babel-transform-decorators" in .package.json file.

### Why Ramda ? We have Underscore or Lodash !

Ramda has a more focused goal.

Ramda use pattern like iterable, transducer.

Ramda is designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.

Doc : http://ramdajs.com/0.22.1/docs/

### How i can add vendor in my project ?

You can add/remove vendor file in "client/vendor.js".
