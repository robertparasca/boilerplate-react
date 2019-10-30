import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth from './auth';
import tickets from './tickets';
import ticket from './ticket';
import users from './users';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,
  tickets,
  ticket,
  users
});
