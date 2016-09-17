# ying-yang-react

![](http://image.noelshack.com/fichiers/2016/37/1473789222-sucess.jpg)

![](http://image.noelshack.com/fichiers/2016/37/1473789284-screen-1.jpg)

[![Build Status](https://travis-ci.org/kMeillet/ying-yang-react.svg?branch=master)](https://travis-ci.org/kMeillet/ying-yang-react)

React Ying Yang consist on a React boilerplate who can pretend to consume any API and make component testable and re-usable.

We will produce a boilerplate with 3 way to follow :

- Simple and elegant.
- Use latest package.
- If you need more, do it.

# Content

- WebPack 2 with dev/prod configuration, 3-shaking, multiple loaders/plugins (build system).
- Babel stage-0 (for productive code).
- HMR with React Hot Loader (refresh your component)
- Perfect CSS support : Autoprefixer + CSS mqPacker + CSS Comb.
- EsLint (with AirBnB configuration + some presets to enforce good practice).
- Radium (Inline React Style).
- Axios (Http Request).
- Jest & Enzyme (Testing).
- Selenium Web Driver (E2E).
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

### I can't use class and this, what the hell ?

The project follow my personal opinion of "good practice" for React :

- 2x indent space.
- Don't use of : arguments, class, delete, events, getter, setter, let, var loops, statement.
- 0 mutations.
- No var/let, only const.
- Never use this.
- Don't use null or undefined.
- Don't use ES6 Proxy. 
- Don't use rest parameters.
- Don't write unused expression.
- Don't use valueOf.
- You can use "console" object (but don't forget to disable this rule before production).
- Default ES6 import without name permitted for merging component.
- Write component as function, forget React.createClass or React.Component.
- You can use strings refs in component. (this rule will be removed soon).
- Stateless function please.
- For the rest, we follow AirBnB JavaScript standard + React plugin rules.

Why we need that ?

- Bloated components and poor data structures are easily spotted.
- Laziness is dead, you’re forced to think and put state management where it belongs : in higher level container components.
- You don't need to bind function (in JSX), we use pure function.
- Easy to understand and test.
- +++ Performance.

You can change ESLint configuration in ".eslintrc" file.

### New router ?

React Router v4 doc : https://github.com/ReactTraining/react-router/blob/v4/README.md

### Can i use ES7 decorators ?

No, spec. can change and we don't need autobinding now, we use pure function.

### Why Ramda ? We have Underscore or Lodash !

Ramda has a more focused goal.

Ramda use pattern like iterable, transducer.

Ramda is designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.

Ramda can work with React very well.

Doc : http://ramdajs.com/0.22.1/docs/

### How i can add vendor in my project ?

You can add/remove vendor file in "client/vendor.js".
