// ./src/app/layout.tsx
"use client"
import React, { useState, useEffect } from 'react';
import ContextProvider from '../context';
import { config } from '../config';
import "../global.css";
import LoadingSpinner from '../components/LoadingSpinner';

// Definim metadatele ca o constantă în afara componentei
const metadata = {
  title: 'Exploras Coin',
  description: 'Revolutionizing Global Travel'
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ascunde spinner-ul după 2 secunde
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Curăță timer-ul când componenta este dezmontată sau atunci când loading devine false
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <LoadingSpinner /> // Afiseaza spinner-ul de incarcare
        ) : (
          <ContextProvider initialState={config}>{children}</ContextProvider>
        )}
      </body>
    </html>
  );
}
