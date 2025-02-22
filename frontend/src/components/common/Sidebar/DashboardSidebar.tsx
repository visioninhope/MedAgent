'use client';

import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { DashboardOutlined, BarChartOutlined, FileOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    key: 'overview',
    icon: <DashboardOutlined />,
    label: 'Overview',
  },
  {
    key: 'analytics',
    icon: <BarChartOutlined />,
    label: 'Analytics',
  },
  {
    key: 'reports',
    icon: <FileOutlined />,
    label: 'Reports',
  },
];

const DashboardSidebar: React.FC = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['overview']}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
    />
  );
};

export default DashboardSidebar;
