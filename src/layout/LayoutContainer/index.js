import React from 'react';
import { Layout, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { me } from '../../redux/actions/auth';

const LayoutContent = ({ children }) => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    if (authState.isAuthenticated && authState.user === null) {
        me()(dispatch);
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            { authState.isAuthenticated && authState.user === null ? <Spin /> : children }
        </Layout>
    );
};

export default LayoutContent;
