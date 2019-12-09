import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Tickets from '../../pages/Tickets';
import Ticket from '../../pages/Ticket';
import MyProfile from '../../pages/MyProfile';
import Users from '../../pages/Users';
import EditUserPermissions from '../../pages/EditUserPermissions';
import LoginWithPassword from '../../pages/LoginWithPassword';
import Forbidden from '../../pages/Forbidden';
import Settings from '../../pages/Settings';
import TicketType from '../../pages/TicketType';
import InstituteForm from '../../pages/InstituteForm';
import NotFound from '../../pages/NotFound';

const ticketsGuards = ['TicketController_index'];
const newTicketGuards = ['TicketController_store'];
const usersGuards = ['UserController_index'];
const editUserPermissionsGuards = ['UserController_updatePermissions'];

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path='/' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/admin' component={LoginWithPassword} exact />
            <PrivateRoute path='/tickets' component={Tickets} exact guards={ticketsGuards} />
            <PrivateRoute path='/tickets/new' component={Ticket} exact guards={newTicketGuards} />
            <PrivateRoute path='/my-profile' component={MyProfile} exact />
            <PrivateRoute path='/users' component={Users} exact guards={usersGuards} />
            <PrivateRoute path='/users/:id' component={EditUserPermissions} exact guards={editUserPermissionsGuards} />
            <PrivateRoute path='/settings' component={Settings} exact />
            <PrivateRoute path='/settings/tickets/new' component={TicketType} exact />
            <PrivateRoute path='/settings/institute/edit' component={InstituteForm} exact />
            <PrivateRoute path='/forbidden' component={Forbidden} exact />
            <PrivateRoute path='/404' component={NotFound} />
            <Redirect to='/404' />
        </Switch>
    );
};

export default Routes;
