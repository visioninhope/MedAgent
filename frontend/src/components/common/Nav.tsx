// components/common/Navigation.tsx

import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { HomeOutlined, MessageOutlined, EditOutlined, DashboardOutlined } from '@ant-design/icons';

const AppNav: React.FC = () => {
  const { t } = useTranslation();

  const menuItems = [
    { key: 'home', icon: <HomeOutlined/>, label: <Link href="/">{t('nav.home')}</Link> },
    { key: 'chat', icon: <MessageOutlined/>, label: <Link href="/chat">{t('nav.chat')}</Link> },
    { key: 'studio', icon: <EditOutlined/>, label: <Link href="/studio">{t('nav.studio')}</Link> },
    { key: 'dashboard', icon: <DashboardOutlined/>, label: <Link href="/dashboard">{t('nav.dashboard')}</Link> },
  ];

  return (
    <Menu
      mode="horizontal"
      items={menuItems}
      theme="dark" // dark 模式可以使文字变为白色
      defaultSelectedKeys={['home']} // 默认选中 home
      style={{ flex: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center' }}
    />
  );
};

export default AppNav;