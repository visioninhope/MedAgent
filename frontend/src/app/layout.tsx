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
      <head>
        <title>MedAgent</title>
        <meta charSet="utf-8" />        
        <meta name="description" content="MedAgent - AI-powered medical assistant" />
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body>
          <AppHeader />
          <main style={{ minHeight: '80vh', padding: '20px' }}>{children}</main>
          <AppFooter />
      </body>
    </html>
  );
}
