// app/(auth)/sign-in/page.tsx
'use client';

import React from 'react';
import { Form, Input, Button } from 'antd';

const SignInPage: React.FC = () => {
  const onFinish = (values: any) => {
    //TODO
    console.log('Login Information', values);
  };

  return (
    <div style={{ maxWidth: 300, margin: '50px auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>Sign In</h2>
      <Form name="sign_in" onFinish={onFinish} layout="vertical">
        <Form.Item 
          label="Username" 
          name="username" 
          rules={[{ required: true, message: 'Please enter the username!' }]}
        >
          <Input placeholder="Please enter the username" />
        </Form.Item>
        <Form.Item 
          label="password" 
          name="password" 
          rules={[{ required: true, message: 'Please enter the password!' }]}
        >
          <Input.Password placeholder="Please enter the password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInPage;
