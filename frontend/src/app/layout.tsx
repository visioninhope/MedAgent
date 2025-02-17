'use client';  // 让此文件成为客户端组件

import 'antd/dist/reset.css';
import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

const { Header, Footer } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items1}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>

          {children}

          <Footer style={{ textAlign: 'center' }}>
            {/* 这里可以放心使用 new Date().getFullYear() */}
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
