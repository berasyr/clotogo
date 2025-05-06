import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const defaultMetadata: Metadata = {
  title: 'CloToGo - Clothing Delivery Service',
  description: 'Premier clothing delivery service. Get your favorite clothes delivered right to your doorstep.',
  keywords: 'clothing delivery, fashion delivery, online shopping, clothing service',
  authors: [{ name: 'CloToGo' }],
  openGraph: {
    title: 'CloToGo - Clothing Delivery Service',
    description: 'Premier clothing delivery service. Get your favorite clothes delivered right to your doorstep.',
    type: 'website',
    locale: 'en_US',
    siteName: 'CloToGo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloToGo - Clothing Delivery Service',
    description: 'Premier clothing delivery service. Get your favorite clothes delivered right to your doorstep.',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
} 