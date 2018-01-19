import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import axios from 'axios';
import apiMiddleware from './utils/apiMiddleware';

const options = { axios, native: true };

const enhancers = compose(
  applyMiddleware(thunk, apiMiddleware(options))
)

const store = createStore(rootReducer, {}, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  });
}

export default store;