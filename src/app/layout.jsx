// ./src/app/layout.tsx
"use client"
import React from 'react';
import ContextProvider from '../context';
import { config } from '../config';
import "../global.css";

// Definim metadatele ca o constantă în afara componentei
const metadata = {
  title: 'Exploras Coin',
  description: 'Revolutionizing Global Travel'
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
          <ContextProvider initialState={config}>
            {children}</ContextProvider>
      </body>
    </html>
  );
}
