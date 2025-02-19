"use client";

import React from 'react';
import { Typography } from 'antd';
import withRole from '../hoc/withRole';

const { Title } = Typography;

const StudioPage = () => {
  return (
    <div>
      <Title>MedAgent - Studio</Title>
      <p>This page is for developer to manage the RAG pipeline and agentic AI workflow.</p>
    </div>
  );
};

export default withRole(StudioPage, ['developer']);
