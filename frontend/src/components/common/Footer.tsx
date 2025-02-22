// components/common/Footer.tsx
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      MedAgent ©2025 Created by RWTH (DBIS) and UKA (IMI)
    </Footer>
  );
};

export default AppFooter;