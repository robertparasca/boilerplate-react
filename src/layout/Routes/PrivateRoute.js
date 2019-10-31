import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { hasPermissions } from '../../utils/permissions';

const PrivateRoute = ({ component: Component, guards, ...rest}) => {
    const authState = useSelector((state) => state.auth);
    console.log(authState.permissions);
    return (
        <Route {...rest} render={(props) => {
            if (authState.isAuthenticated) {
                if (hasPermissions(authState.permissions, guards)) {
                    return <Component {...props} />
                }
                return <Redirect to='/forbidden' />;
            }
            return <Redirect to='/login' />;
        }} />
    );
};

export default PrivateRoute;