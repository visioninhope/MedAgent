'use client';

import React from 'react';
import { Layout } from 'antd';
import DashboardSidebar from '@/components/common/Sidebar/DashboardSidebar';
import withRole from '@/app/auth/withRole';

const { Sider, Content } = Layout;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        <DashboardSidebar />
      </Sider>
      <Layout style={{ padding: '24px' }}>
        <Content
          style={{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

// export default DashboardLayout;

export default withRole(DashboardLayout, ['admin']);
