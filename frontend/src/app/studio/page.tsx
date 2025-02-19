"use client";

import React from 'react';
import { Typography } from 'antd';
import withRole from '../hoc/withRole';

const { Title } = Typography;

const StudioPage = () => {
  return (
    <div>
      <Title>Studio</Title>
      <p>此页面供开发者管理 RAG pipeline 使用。</p>
    </div>
  );
};

export default withRole(StudioPage, ['developer']);
