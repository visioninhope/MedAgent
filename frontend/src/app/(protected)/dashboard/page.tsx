'use client';

import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

const { Title, Paragraph } = Typography;

const DashboardPage: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: 1500 },
    { title: 'Active Sessions', value: 300 },
    { title: 'New Signups', value: 25 },
  ];

  return (
    <div>
      <Title level={2}>Dashboard Overview</Title>
      <Paragraph>Here you can see a quick snapshot of system metrics.</Paragraph>

      <Row gutter={16}>
        {stats.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card style={{ marginBottom: '16px' }}>
              <Title level={4}>{item.title}</Title>
              <Paragraph style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.value}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardPage;
