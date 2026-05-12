import SmoothScroll from '@/components/SmoothScroll'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import WhatsAppButton from '@/components/whatsapp-button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const _geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'The Cake Box Lady | Handcrafted Custom Cakes',
  description: 'Handcrafted custom celebration cakes designed with warmth, artistry, and emotion. Premium custom cake for every celebration.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
        {
          url: '/favicon.ico',
        },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_geist.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">

        <SmoothScroll>
          {/* GLOBAL NAVBAR */}
          <Navbar />

          {children}

          {/* GLOBAL FOOTER */}
          <Footer />
          </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {/* WHATSAPP BUTTON */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
