import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'E-Portfolio | OJT Journey',
  description: 'On-The-Job-Training E-Portfolio Documentation',
  generator: 'v0.app',
  icons: {
    icon: '/ojt-icon.png',
    apple: '/ojt-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900">
      <body className="font-sans antialiased bg-slate-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
