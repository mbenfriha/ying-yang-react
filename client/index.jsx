import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';

import App from './containers/App/App';
import store from './store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Match exactly pattern="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
