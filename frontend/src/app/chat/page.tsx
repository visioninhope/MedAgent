"use client";

import React from 'react';
import { Typography } from 'antd';
import withRole from '../hoc/withRole';

const { Title } = Typography;

const ChatPage = () => {
  return (
    <div>
      <Title>MedAgent Chat</Title>
      <p>This page is for doctors to interact with the system through chat.</p>
    </div>
  );
};

export default withRole(ChatPage, ['user']);
