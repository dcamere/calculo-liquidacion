import React, { ReactNode } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', background: 'black'}}>
        <Content style={{ margin: '100px' }}>
            {children}
        </Content>
    </Layout>
  );
};

export default DefaultLayout;
