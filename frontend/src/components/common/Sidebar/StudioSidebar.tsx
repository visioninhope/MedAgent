'use client';

import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { EditOutlined, FolderOpenOutlined, SettingOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    key: 'projects',
    icon: <EditOutlined />,
    label: 'Projects',
  },
  {
    key: 'assets',
    icon: <FolderOpenOutlined />,
    label: 'Assets',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

const StudioSidebar: React.FC = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['projects']}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
    />
  );
};

export default StudioSidebar;
