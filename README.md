# ying-yang-react

![](http://image.noelshack.com/fichiers/2016/37/1473789222-sucess.jpg)

![](http://image.noelshack.com/fichiers/2016/37/1473789284-screen-1.jpg)

[![Build Status](https://travis-ci.org/kMeillet/ying-yang-react.svg?branch=master)](https://travis-ci.org/kMeillet/ying-yang-react)

We will produce a boilerplate with 3 consideration :

- Functional, modulable, modern.
- Latest package, regular update.
- If you need more, plug it.

# Content

- WebPack 2 with custom abstraction : 3-shaking, multiple loaders/plugins, mixins/hooks system.
- Babel stage-2 (for productive code).
- HMR with React Hot Loader (refresh your component)
- Perfect CSS support : Autoprefixer + CSS mqPacker + CSS Comb.
- EsLint (with AirBnB configuration + some presets to enforce good practice).
- Ramda (functional programming).
- Radium (inline React Style).
- Axios (http Request).
- React with : react-dom, react-router, react-redux, react-functional.
- Redux with : redux-form, redux-thunk.
- Support for Redux DevTools : https://github.com/zalmoxisus/redux-devtools-extension

# How to install ?

You need Node.js >= 6 and NPM >= 3.

```sh
git clone https://github.com/kMeillet/ying-yang-react
cd ying-yang-react/
npm i
npm start
```

# Script

### Run development server

```sh
npm start
```

### Run production build

```sh
npm run build
```

### Run test [IN PROGRESS !]

```sh
npm run test
```

### Run test watch server [IN PROGRESS !]

```sh
npm run test:watch
```

### Run E2E test [IN PROGRESS !]

```sh
npm run e2e
```

### Run test suite [IN PROGRESS !]

```sh
npm run suite
```

### Deploy [IN PROGRESS !]

```sh
npm run publish
```

### Update packages

```sh
npm run updates
```

# FAQ

### Why i need this ?

Boilerplate are ***opiniated*** and they have ton of possibility.

Boilerplate are used to simplify build-process and focus on project instead of architecture.

If you disallow regular object-oriented programming with class and want to use more functional and pure functions, you're in right place.

Otherwise, you may probably need to use regular React boilerplate or make your one.

You ***never*** need boilerplate to use React, an HTML file with script tag can do it alone.

### I can't use class and this, what the hell ?

The project follow hard rules to enforce good practice for more functional project :

- 2x indent space.
- Comma-dangle in function arguments and Array / Object literal (if they're split into multiple line).
- Don't use of : arguments, class, delete, events, getter, setter, let, var, loops, statement.
- Avoid mutations.
- No var/let, only const.
- Don't use this.
- Don't use null or undefined.
- Don't use ES6 Proxy. 
- Don't use rest parameters.
- Don't write unused expression.
- Don't use valueOf.
- You can't use "console" object, use external logger.
- Default ES6 import without name permitted for merging component.
- Write component as function, forget React.createClass or React.Component.
- Stateless function please.
- No React string refs.
- Function with new cap without constructor are authorized (like Ramda F()).
- For the rest, we follow AirBnB JavaScript standard + React plugin rules.

Why we need that ?

- Bloated components and poor data structures are easily spotted.
- Laziness is dead, you’re forced to think and put state management where it belongs : in higher level container components.
- You may rarely need binding function (in JSX), we try to use pure function.
- Easy to understand and test.
- Performance (in future).

You can change ESLint configuration in ".eslintrc" file.

### How i can add PropTypes or lifecycle hook ?

With "react-functional", function support lifecycle hook.

Add life cycle methods to stateless functional components, without the class noise.

```js
import { React } from 'react';
import functional from 'react-functional';

const ComponentA = props => (
  <div>{ props.name }</div>
);

ComponentA.shouldComponentUpdate = (props, nextProps) => props.name !== nextProps.name;

export default functional(ComponentA);
```

You may notice we mutate Component A : we authorize mutation to add React lifecycle hook and propTypes/defaultProps.

We can use more pure solution (you can use one of them) :

```js
import { React } from 'react';
import functional from 'react-functional';

const ComponentA = props => (
  <div>{ props.name }</div>
);

const hook = {
  shouldComponentUpdate: (props, nextProps) => props.name !== nextProps.name,
};

export default functional(ComponentA, hook);
```

### New router ?

React Router v4 doc : https://github.com/ReactTraining/react-router/blob/v4/README.md

### Can i use ES7 decorators ?

No, spec. can change and we try to use pure function to prevent context binding.

Decorators are really awesome but we don't need it.

### Can i move to Babel stage-0 ?

Stage-0 can be useful for mass export or if you want latest ECMAScript power.

If you want to change stage, remove the old stage in "package.json" and install new stage.

Then, edit ".babelrc" file.

### Why Ramda ? We have Underscore or Lodash !

Ramda has a more focused goal.

Ramda implement Fantasy Land algebraic data-structure (https://github.com/fantasyland/fantasy-land).

Ramda is designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.

Ramda can work with React very well.

Doc : http://ramdajs.com/0.22.1/docs/

### Can i use Immutable.js ?

Yes, with immutable PropTypes, that will be good : https://www.npmjs.com/package/react-immutable-proptypes

### How i can add vendor in my project ?

You can add/remove vendor file in "client/vendor.js".

### How i can change WebPack configuration ?

We use custom abstraction to leverage friction with WebPack.

In "__env__" directory, you can find 2 configuration environment : production or development.

You can make your own environment and use it with WebPack.
 
Builder function return WebPack 2 configuration and use 4 params :

- Base provider (a default WebPack configuration).
- Mixins list.
- Loader list.
- Plugins list.

### Can i make global conf for all environment ?

No, every environment has own configuration with mixins, plugins, loaders and base configuration provider.

### How i can use a new loader ?

List of available loaders :

- Assets (images, fonts, videos, sound)
- Babel
- CSS
- ESLint
- JSON

You can add any loader : install it via npm and write a new loader file in "__env__/providers/loaders" directory with boilerplate :

```js
'use strict';

const ext = [];

const wrapper = {};

const pre = {};

const loader = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
};
````

As you can see, loaders are plain object with 4 props :
 
- ext : an array of extensions (like .js, .jsx) to target.
- wrapper : wrap provider with custom configuration if needed.
- pre, loader : preLoaders, loaders.

### How i can remove/add a WebPack plugin ?

### How i can remove/add mixin ?

Mixin are useful for fast-change on configuration, like enabled devTools or run dev server.

