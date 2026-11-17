'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 md:px-12">
        <Link href="/" className="no-underline" aria-label="Zynex Labs home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {NAV_LINKS.map(link => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-1 text-[15px] no-underline transition-colors duration-200 ${
                  active ? 'text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {link.label}
                {active && <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--ink)]" />}
              </Link>
            )
          })}
          <Button href="/contact" variant="box">
            Contact
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-[var(--line)] text-[var(--ink)] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-[var(--line)] bg-white transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-[460px] border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {NAV_LINKS.map(link => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                tabIndex={open ? 0 : -1}
                className={`border-b border-[var(--line)] px-5 py-4 font-display text-[22px] tracking-[-0.02em] no-underline ${
                  active ? 'bg-[var(--surface)] text-[var(--ink)]' : 'text-[var(--ink)] hover:bg-[var(--surface)]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="p-5">
            <Button href="/contact" size="lg" className="w-full">
              Book a call
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
