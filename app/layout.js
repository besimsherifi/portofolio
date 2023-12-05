import { Inter } from 'next/font/google'
import './globals.css'

import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Besim Sherifi',
  description: 'Fullstack web, mobile developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
