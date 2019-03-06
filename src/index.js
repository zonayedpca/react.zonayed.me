import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';

import App from './App';
import reducers from './reducers';

import './index.css';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, applyMiddleware(reduxPromise));

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
