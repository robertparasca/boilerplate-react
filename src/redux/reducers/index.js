import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth from './auth';
import tickets from './tickets';
import ticket from './ticket';
import users from './users';
import editUser from './editUser';
import permissions from './permissions';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,
  tickets,
  ticket,
  users,
  editUser,
  permissions
});
