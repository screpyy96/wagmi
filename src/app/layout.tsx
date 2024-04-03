import type { Metadata } from 'next'

import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'
import ContextProvider from '@/context'
import { config } from '@/config'
import "../global.css"


export const metadata: Metadata = {
  title: 'Exploras Coin',
  description: 'Revolutionizing Global Travel'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body >
        <ContextProvider initialState={initialState}>{children}</ContextProvider>
      </body>
    </html>
  )
}
