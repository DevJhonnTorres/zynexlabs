import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LoadingIntro } from '@/components/ui/LoadingIntro'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const SITE_URL = 'https://zynexlabs.tech'
const SITE_TITLE = 'Zynex Labs — AI, Automation & Web3 Development Company'
const SITE_DESCRIPTION =
  'Zynex Labs is a software development company in Colombia building AI systems, automation pipelines, Web3 protocols and scalable software for next-generation companies.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: '%s | Zynex Labs' },
  description: SITE_DESCRIPTION,
  keywords: [
    'Zynex Labs',
    'Zynex',
    'zynexlabs',
    'AI',
    'automation',
    'blockchain',
    'Web3',
    'software development',
    'Colombia',
    'FinTech',
    'cloud infrastructure',
  ],
  authors: [{ name: 'Zynex Labs S.A.S.' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Zynex Labs',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/logo.png', width: 1693, height: 929, alt: 'Zynex Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Zynex Labs',
      legalName: 'Zynex Labs S.A.S.',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      foundingDate: '2024',
      address: { '@type': 'PostalAddress', addressCountry: 'CO' },
      sameAs: ['https://github.com/DevJhonnTorres'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Zynex Labs',
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingIntro />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
