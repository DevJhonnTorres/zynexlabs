'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--border)] backdrop-blur-md bg-[rgba(4,4,10,0.88)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="no-underline">
          <span className="text-[13px] font-bold tracking-[4px] uppercase text-white hover:text-[var(--muted)] transition-colors duration-200">
            ZYNEX LABS
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[12px] transition-colors duration-200 no-underline relative ${
                  active ? 'text-white' : 'text-[var(--dim)] hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Contact CTA */}
        <button
          onClick={() => window.open(CALENDLY_URL, '_blank')}
          className="text-[11px] tracking-[1px] border border-[rgba(255,255,255,0.18)] text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
        >
          Contact
        </button>
      </div>
    </header>
  )
}
