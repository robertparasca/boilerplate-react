import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth from './auth';
import tickets from './tickets';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,
  tickets
});
