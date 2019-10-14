import React from 'react';
import { Layout } from 'antd';

const LayoutContent = ({ children }) => {
  console.log(children);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {children}
    </Layout>
  );
};

export default LayoutContent;