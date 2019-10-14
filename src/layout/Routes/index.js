import React from 'react';
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/dashboard' component={Dashboard} exact />
        </Switch>
    );
};

export default Routes;
