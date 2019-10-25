import React from 'react';
import { Layout, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { me } from '../../redux/actions/auth';

const LayoutContent = ({ children }) => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    if (authState.isAuthenticated && authState.user === null) {
        me()(dispatch);
        return (<Spin id='layout-content-spinner' />);
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            { children }
        </Layout>
    );
};

export default LayoutContent;
