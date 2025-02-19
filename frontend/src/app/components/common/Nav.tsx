import { Menu, Button } from 'antd';
import Link from 'next/link';
import Image from "next/image";
import { UserOutlined } from '@ant-design/icons';

const menuItems = [
  {
    key: 'home',
    label: <Link href="/">Home</Link>,
  },
  {
    key: 'chat',
    label: <Link href="/chat">Chat</Link>,
  },
  {
    key: 'studio',
    label: <Link href="/studio">Studio</Link>,
  },
  {
    key: 'dashboard',
    label: <Link href="/dashboard">Dashboard</Link>,
  },
];

const Nav = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        background: '#fff',
        boxShadow: '0 2px 8px #f0f1f2',
      }}
    >
      {/* Logo */}
      <div style={{ marginRight: '24px' }}>
        <Link href="/">
          <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={40}  />
        </Link>
      </div>

      {/* Menu */}
      <Menu mode="horizontal" items={menuItems} style={{ flex: 1 }} />

      {/* Signin Button */}
      <Link href="/signin">
        <Button type="primary" icon={<UserOutlined />}>
          Sign in
        </Button>
      </Link>
    </div>
  );
};

export default Nav;
