import React, { ReactNode } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={
      { 
        minHeight: '100vh', 
        background: 'black', 
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
      <Content style={
        { 
          margin: '100px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          maxWidth: '300px'
        }
      }>
          {children}
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
