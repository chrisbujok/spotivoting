import { createStore, combineReducers, applyMiddleware } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import queue from './reducers/queue';
import { search } from './reducers/search';
import App from './components/App';
import thunk from 'redux-thunk';

const app = combineReducers({
  queue,
  search,
});

const store = createStore(app, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
