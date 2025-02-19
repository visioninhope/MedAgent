"use client";

import React from 'react';
import { Typography } from 'antd';
import withRole from '../hoc/withRole';

const { Title } = Typography;

const DashboardPage = () => {
  return (
    <div>
      <Title>Dashboard</Title>
      <p>此页面供管理员管理系统使用。</p>
    </div>
  );
};

export default withRole(DashboardPage, ['admin']);
