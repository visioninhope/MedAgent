import { Layout } from 'antd';
const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      MedAgent ©2025 Created by RWTH (DBIS) and UKA (IMI)
    </Footer>
  );
};

export default CustomFooter;