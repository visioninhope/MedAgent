// components/common/Header.tsx
'use client';

import React from 'react';
import { Layout, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import AppNav from '@/components/common/Nav';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

const { Header } = Layout;

const menuItems = [
  { key: 'nav1', label: 'nav 1' },
  { key: 'nav2', label: 'nav 2' },
  { key: 'nav3', label: 'nav 3' },
];

const AppHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#001529', // 深色背景
        justifyContent: 'space-between',
        padding: '0 20px',
      }}
    >
      {/* 左侧 Logo */}
      <div style={{ flex: 'none', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
        MedAgent
      </div>

      {/* 中间导航 */}  
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <AppNav />
      </div>

      {/* 右侧语言切换器和登录按钮 */}
      <Space>
        <LanguageSwitcher />
        <Link href="/sign-in">
          <Button type="primary" shape="round" icon={<UserOutlined />}>
            {t('nav.sign_in')}
          </Button>
        </Link>
      </Space>
    </Header>
  );
};

export default AppHeader;
