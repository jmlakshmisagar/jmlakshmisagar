import type { Metadata } from 'next'
import './globals.css'
import Cursor from './cursor'
import ServiceWorkerInit from './components/ServiceWorkerInit'

export const metadata: Metadata = {
  title: 'Lakshmi Sagar JM | Portfolio',
  description: 'Full Stack Developer specializing in modern web technologies',
  keywords: ['full stack', 'developer', 'react', 'node.js', 'typescript'],
  authors: [{ name: 'Lakshmi Sagar JM' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'jmlakshmisagar.vercel.app',
    siteName: 'jmlakshmisagar.me',
    title: 'It\'s Mine',
    description: 'Full Stack Developer Portfolio',
    images: [{
      url: '/images/my-pic.jpg',
      width: 1200,
      height: 630,
      alt: 'Lakshmisagar J M'
    }]
  },
  icons: {
    icon: '/icons/icon.png',
    apple: '/icons/icon.png',
    shortcut: '/icons/icon.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fondamento:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" 
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/icon.png" />
        <meta name="theme-color" content="#bcaaa4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>
        <ServiceWorkerInit />
        <Cursor />
        {children}
      </body>
    </html>
  )
}
