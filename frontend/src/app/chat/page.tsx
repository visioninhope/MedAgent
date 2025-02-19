"use client";

import React from 'react';
import { Typography } from 'antd';
import withRole from '../hoc/withRole';

const { Title } = Typography;

const ChatPage = () => {
  return (
    <div>
      <Title>问答</Title>
      <p>此页面供医生通过聊天交互使用系统。</p>
    </div>
  );
};

export default withRole(ChatPage, ['user']);
