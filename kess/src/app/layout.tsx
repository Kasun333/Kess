import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'KESS - Kegalle Engineering Students Society',
    template: '%s | KESS - Kegalle Engineering Students Society'
  },
  description: 'KESS (Kegalle Engineering Students Society) is a volunteer-driven organization dedicated to empowering Kegalle through education, community service, and engineering excellence.',
  keywords: [
    'KESS',
    'KeSS',
    'Kegalle Engineering Society',
    'Kegalle Engineering Students Society',
    'Engineering Society Sri Lanka',
    'Kegalle Engineering',
    'Engineering Students Association',
    'Kegalle Education',
    'Engineering Community Sri Lanka',
    'Student Engineering Projects',
    'Engineering Workshops Kegalle',
    'Engineering Education Sri Lanka',
    'Kegalle Technical Education',
    'Engineering Students Network',
    'Kegalle Engineering Events',
    'Engineering Society Activities',
    'Student Engineering Organization',
    'Kegalle Engineering Development',
    'Engineering Community Service',
    'Kegalle Engineering Excellence'
  ],
  authors: [{ name: 'KESS Team' }],
  creator: 'KESS',
  publisher: 'KESS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kess.lk',
    siteName: 'KESS - Kegalle Engineering Students Society',
    title: 'KESS - Kegalle Engineering Students Society',
    description: 'KESS (Kegalle Engineering Students Society) is a volunteer-driven organization dedicated to empowering Kegalle through education, community service, and engineering excellence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KESS - Kegalle Engineering Students Society',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KESS - Kegalle Engineering Students Society',
    description: 'KESS (Kegalle Engineering Students Society) is a volunteer-driven organization dedicated to empowering Kegalle through education, community service, and engineering excellence.',
    images: ['/og-image.jpg'],
    creator: '@kess',
    site: '@kess',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  alternates: {
    canonical: 'https://kess.lk',
    languages: {
      'en-US': 'https://kess.lk',
    },
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
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 