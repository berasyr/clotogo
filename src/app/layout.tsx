import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { defaultMetadata } from './metadata'
import ClientLayout from './components/ClientLayout'
import Banner from './components/Banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className={inter.className}>
        <Banner />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
} 