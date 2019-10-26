import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Tickets from '../../pages/Tickets';
import Ticket from '../../pages/Ticket';
import MyProfile from '../../pages/MyProfile';
import LoginWithPassword from '../../pages/LoginWithPassword';

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path='/' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/admin' component={LoginWithPassword} exact />
            <PrivateRoute path='/tickets' component={Tickets} exact />
            <PrivateRoute path='/tickets/new' component={Ticket} exact />
            <PrivateRoute path='/my-profile' component={MyProfile} exact />
        </Switch>
    );
};

export default Routes;
