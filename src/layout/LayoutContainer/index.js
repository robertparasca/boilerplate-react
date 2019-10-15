import React from 'react';
import { Layout } from 'antd';

const LayoutContent = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {children}
        </Layout>
    );
};

export default LayoutContent;