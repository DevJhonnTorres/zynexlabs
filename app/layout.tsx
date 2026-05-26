import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
  description: 'We build AI systems, automation pipelines, Web3 protocols, and scalable software for next-generation companies. Colombia → World.',
  keywords: ['AI', 'automation', 'blockchain', 'Web3', 'software development', 'Colombia', 'FinTech', 'cloud'],
  authors: [{ name: 'Zynex Labs S.A.S.' }],
  openGraph: {
    title: 'Zynex Labs — Advanced Technology Infrastructure',
    description: 'AI · Automation · Web3 · Software · Colombia → World',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
