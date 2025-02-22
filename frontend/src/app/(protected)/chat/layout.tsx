// src/app/(protected)/chat/layout.tsx
'use client';
import React from 'react';
import { Layout } from 'antd';
import ChatSidebar from '@/components/common/Sidebar/ChatSidebar';

const { Sider, Content } = Layout;

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧 Sider */}
      <Sider width={200} style={{ background: '#fff' }}>
        <ChatSidebar />
      </Sider>

      {/* 右侧内容区域 */}
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

export default ChatLayout;

