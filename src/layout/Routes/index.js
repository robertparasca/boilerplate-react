import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Tickets from '../../pages/Tickets';
import Ticket from '../../pages/Ticket';

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path='/' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <PrivateRoute path='/tickets' component={Tickets} exact />
            <PrivateRoute path='/tickets/new' component={Ticket} exact />
        </Switch>
    );
};

export default Routes;
