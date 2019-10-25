import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';

const history = createBrowserHistory();

const middleware = [];
middleware.push(thunk);

const enhancers = [];
enhancers.push(composeWithDevTools(applyMiddleware(...middleware)));

const store = createStore(rootReducer(history), compose(...enhancers));

export default store;
