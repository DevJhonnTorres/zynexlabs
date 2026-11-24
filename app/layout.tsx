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

export const metadata: Metadata = {
  title: 'Zynex Labs — Advanced Technology Infrastructure',
  description: 'We build AI systems, automation pipelines, Web3 protocols, and scalable software for next-generation companies. Founded 2024, Colombia.',
  keywords: ['AI', 'automation', 'blockchain', 'Web3', 'software development', 'Colombia', 'FinTech', 'cloud infrastructure'],
  authors: [{ name: 'Zynex Labs S.A.S.' }],
  openGraph: {
    title: 'Zynex Labs — Advanced Technology Infrastructure',
    description: 'AI · Automation · Web3 · Software · Founded 2024 · Colombia → World',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} antialiased`}>
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
