import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Tickets from '../../pages/Tickets';
import Ticket from '../../pages/Ticket';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/tickets' component={Tickets} exact />
            <Route path='/tickets/new' component={Ticket} exact />
        </Switch>
    );
};

export default Routes;
