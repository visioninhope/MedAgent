"use client";

import React from 'react';
import { Form, Button, Select, Typography } from 'antd';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const { Title } = Typography;
const { Option } = Select;

type Role = 'user' | 'developer' | 'admin';

interface SignInFormValues {
  role: Role;
}

const SignInPage = () => {
  const { setRole } = useAuth();
  const router = useRouter();

  const onFinish = (values: SignInFormValues) => {
    const { role } = values;
    setRole(role);
    router.push('/'); // 登录后跳转到首页
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '50px 0' }}>
      <Title level={2}>登录</Title>
      <Form onFinish={onFinish}>
        <Form.Item
          name="role"
          label="选择角色"
          rules={[{ required: true, message: '请选择您的角色！' }]}
        >
          <Select placeholder="请选择角色">
            <Option value="user">医生 (User)</Option>
            <Option value="developer">开发者 (Developer)</Option>
            <Option value="admin">管理员 (Admin)</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInPage;
