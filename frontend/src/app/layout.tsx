"use client";

import React from 'react';
import { Layout } from 'antd';
import CustomHead from './components/common/Head';
import Nav from './components/common/Nav';
import CustomFooter from './components/common/Footer';
import { AuthProvider } from './context/AuthContext';

const { Content } = Layout;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <CustomHead />
      <body>
        <AuthProvider>
          <Layout style={{ minHeight: '100vh' }}>
            <Nav />
            <Content style={{ padding: '0 50px', marginTop: 24 }}>
              {children}
            </Content>
            <CustomFooter />
          </Layout>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;