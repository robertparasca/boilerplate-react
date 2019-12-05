import React from 'react';
import { Layout, Spin } from 'antd';
import { useSelector } from 'react-redux';

const LayoutContent = ({ children }) => {
    const authState = useSelector((state) => state.auth);
    if ((authState.isAuthenticated && authState.user === null) || authState.loading) {
        return <Spin id='layout-content-spinner' />;
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            { children }
        </Layout>
    );
};

export default LayoutContent;
