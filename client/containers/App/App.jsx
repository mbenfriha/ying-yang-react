import React from 'react';
import { Match, Miss } from 'react-router';

import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';

const App = () => (
  <div className="viewport">
    <Match exactly pattern="/" component={Home} />
    <Match exactly pattern="/about" component={About} />
    <Miss component={NotFound} />
  </div>
);

export default App;
