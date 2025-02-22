// app/layout.tsx
'use client';
import React from 'react';
import AppHeader from '../components/common/Header';
import AppFooter from '../components/common/Footer';
import './styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        <main style={{ minHeight: '80vh', padding: '20px' }}>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
