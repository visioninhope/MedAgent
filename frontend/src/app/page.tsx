"use client";
import React from 'react';
import { Typography } from 'antd';

const HomePage = () => {
  return (
    <div>
      <Typography.Title>欢迎使用医疗指南推荐问答系统</Typography.Title>
      <p>本系统基于 RAG pipeline 和 AI workflow，提供医疗指南推荐问答服务。</p>
    </div>
  );
};

export default HomePage;
