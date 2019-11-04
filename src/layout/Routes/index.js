import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

const ticketGuards = ['TicketController_index'];
const newTicketGuards = ['TicketController_store'];

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path='/' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/admin' component={LoginWithPassword} exact />
            <PrivateRoute path='/tickets' component={Tickets} exact guards={ticketGuards} />
            <PrivateRoute path='/tickets/new' component={Ticket} exact guards={newTicketGuards} />
            <PrivateRoute path='/my-profile' component={MyProfile} exact />
            <PrivateRoute path='/users' component={Users} exact />
            <PrivateRoute path='/users/:id' component={EditUserPermissions} exact />
            <PrivateRoute path='/forbidden' component={Forbidden} exact />
        </Switch>
    );
};

export default Routes;
