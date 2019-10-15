import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import MainHeader from '../MainHeader';

const { Content } = Layout;

const style = { margin: '16px', padding: '16px', background: '#fff' };
const styleLogout = { background: '#fff' };

const ActualContent = ({ children }) => {
    const authState = useSelector((state) => state.auth);
    return (
        <Layout>
            { authState.isAuthenticated ?
            <MainHeader />
            : null }
            <Content style={authState.isAuthenticated ? style : styleLogout}>
                { children }
            </Content>
        </Layout>
    );
};

export default ActualContent;
