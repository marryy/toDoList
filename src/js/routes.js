import React from 'react';
import Component from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Dashboard from 'views/Dashboard';
import About from 'views/About';

const publicPath = '/';

export const routes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
};

class Routes extends React.Component {
  render() {
    return (
      <Router  history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ Dashboard } />
          <Route path={ routes.DASHBOARD } component={ Dashboard } />
          <Route path={ routes.ABOUT } component={ About } />
        </Route>
      </Router>
    );
  }
}

export default Routes;
