import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middleware = [];

const enhancers = [];
enhancers.push(composeWithDevTools(applyMiddleware(...middleware)));

const store = createStore(rootReducer, compose(...enhancers));

export default store;
