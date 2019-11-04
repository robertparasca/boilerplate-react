import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const middleware = [];
middleware.push(thunk);

const enhancers = [];
enhancers.push(composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middleware)));

const store = createStore(rootReducer(history), compose(...enhancers));

export default store;
