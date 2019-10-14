import React from 'react';
import { Layout } from 'antd';

import MainHeader from '../MainHeader';

const { Content } = Layout;

const ActualContent = ({ children }) => {
    return (
        <Layout>
            <MainHeader />
            <Content style={{ margin: '16px', padding: '16px', background: '#fff' }}>
                { children }
            </Content>
        </Layout>
    );
};

export default ActualContent;
