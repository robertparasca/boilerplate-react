import React from 'react';
import { Layout } from 'antd';

import MainHeader from '../MainHeader';

const { Content } = Layout;

const ActualContent = ({ children }) => {
    return (
        <Layout>
            <MainHeader />
            <Content style={{ margin: '0 16px' }}>
                { children }
            </Content>
        </Layout>
    );
};

export default ActualContent;
