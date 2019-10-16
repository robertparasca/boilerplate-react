import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
    const authState = useSelector((state) => state.auth);
    return (
        <Route {...rest} render={(props) => {
            return authState.isAuthenticated ? <Component {...props} /> : <Redirect to={'/login'} />;
        }} />
    );
};

export default PrivateRoute;