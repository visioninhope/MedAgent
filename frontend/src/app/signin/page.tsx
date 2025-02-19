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
    router.push('/'); // Sign in and redirect to the home page
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '50px 0' }}>
      <Title level={2}>Sign in</Title>
      <Form onFinish={onFinish}>
        <Form.Item
          name="role"
          label="Choose your role"
          rules={[{ required: true, message: 'Choose your role' }]}
        >
          <Select placeholder="Choose your role">
            <Option value="user">Doctor (User)</Option>
            <Option value="developer">Knowledge Base Maintainer (Developer)</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInPage;
