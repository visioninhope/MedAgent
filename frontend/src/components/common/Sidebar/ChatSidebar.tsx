// src/components/common/sidebar/ChatSidebar.tsx
'use client';
import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MessageOutlined, SearchOutlined, UserOutlined, NotificationOutlined } from '@ant-design/icons';


const items: MenuProps['items'] = [
  {
    key: 'chats',
    icon: <MessageOutlined />,
    label: 'My Chats',
    children: [
      { key: 'current', label: 'Current Chat' },
      { key: 'history', label: 'Chat History' },
    ],
  },
  {
    key: 'search',
    icon: <SearchOutlined />,
    label: 'Guidelines',
    children: [
      { key: 'quick-search', label: 'Quick Search' },
      { key: 'favorites', label: 'Available Guidelines' },
    ],
  },
  {
    key: 'center',
    icon: <UserOutlined />,
    label: 'User Settings',
    children: [
      { key: 'profile', label: 'My Profile' },
      { key: 'settings', label: 'Settings' },
    ],
  },
];

const ChatSidebar: React.FC = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['current']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
    />
  );
};

export default ChatSidebar;
