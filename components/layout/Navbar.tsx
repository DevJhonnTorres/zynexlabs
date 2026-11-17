'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-[var(--border)] backdrop-blur-xl bg-[rgba(7,7,10,0.85)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-12">
        <Link href="/" className="no-underline" aria-label="Zynex Labs home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map(link => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-1 text-[14px] no-underline transition-colors duration-200 ${
                  active ? 'text-white' : 'text-[var(--muted)] hover:text-white'
                }`}
              >
                {link.label}
                {active && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-accent" />}
              </Link>
            )
          })}
          <Button href="/contact">Book a call</Button>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
          </svg>
        </button>
      </div>

      {/* Mobile slide-down panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-[var(--border)] transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-[420px] border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-3" aria-label="Mobile">
          {NAV_LINKS.map(link => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                tabIndex={open ? 0 : -1}
                className={`rounded-xl px-3 py-3 text-[16px] font-medium no-underline ${
                  active ? 'bg-[var(--accent-soft)] text-accent-2' : 'text-[var(--text)] hover:bg-[var(--surface-2)]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Button href="/contact" size="lg" className="mt-3">
            Book a call
          </Button>
        </nav>
      </div>
    </header>
  )
}
