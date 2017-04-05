import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.jsx';
import Home from './components/containers/home/Home.jsx';
import About from './components/presentational/about/About.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);
