import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Single subtle top glow — shared across all pages */}
        <div
          aria-hidden
          style={{
            position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 45% at 50% -5%, rgba(255,106,0,0.06) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-[5] flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
