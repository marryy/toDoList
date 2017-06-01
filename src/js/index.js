import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import logger from 'dev/logger';

import app from './reducers';
import Routes from 'routes';

import '../styles/main.less';

const isProduction = process.env.NODE_ENV === 'production';

let store = null;

if (isProduction) {
  const middleware = applyMiddleware(thunk);

  store = createStore(
    app,
    middleware
  );
} else {
  const middleware = applyMiddleware(thunk, logger);
  let enhancer;

  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  } else {
    enhancer = compose(middleware);
  }


  store = createStore(
    app,
    enhancer
  );
}

ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
