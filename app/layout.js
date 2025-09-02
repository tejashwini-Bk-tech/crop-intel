import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Krishi Mitra - Farmer\'s Companion App',
  description: 'Your digital farming assistant for weather, market prices, and crop advisory',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
          <div className="mobile-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}