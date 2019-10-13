import React from 'react';
import Home from '../../components/Home';
import Dashboard from '../../components/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} exact />
            <Route path='/dashboard' component={Dashboard} exact />
        </BrowserRouter>
    );
};

export default Routes;
