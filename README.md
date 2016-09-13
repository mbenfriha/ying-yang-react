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
- Babel stage-0 (for productive code).
- Flow (Type).
- EsLint (with AirBnB configuration).
- Ramda (FP).
- React with : react-dom, react-router, react-redux.
- Redux with : redux-form, redux-saga, redux-thunk.

# Install

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
