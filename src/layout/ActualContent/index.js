import React from 'react';

import { Layout } from 'antd';

const { Content } = Layout;

const ActualContent = ({ children }) => {
    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                { children }
            </Content>
        </Layout>
    );
};

export default ActualContent;
