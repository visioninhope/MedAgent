"use client";

import React from 'react';
import { Typography } from 'antd';
import withRole from '../hoc/withRole';

const { Title } = Typography;

const DashboardPage = () => {
  return (
    <div>
      <Title>MedAgent: Dashboard</Title>
      <p>This page is for admin to manage the system.</p>
    </div>
  );
};

export default withRole(DashboardPage, ['admin']);
