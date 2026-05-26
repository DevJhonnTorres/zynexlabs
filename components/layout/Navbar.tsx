'use client'

import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.07)] backdrop-blur-md bg-[rgba(2,2,5,0.92)]">
      <div className="max-w-[1200px] mx-auto px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="w-2 h-2 bg-[#FF6A00] rounded-full shadow-[0_0_8px_#FF6A00]" />
          <span className="text-[14px] font-black tracking-[3px] uppercase group-hover:text-[#FF6A00] transition-colors duration-200">
            ZYNEX LABS
          </span>
        </a>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-[#555] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => window.open(CALENDLY_URL, '_blank')}
          className="font-mono text-[11px] tracking-[2px] uppercase border border-[rgba(255,106,0,0.35)] text-[#FF6A00] px-5 py-2.5 hover:bg-[rgba(255,106,0,0.08)] hover:border-[rgba(255,106,0,0.65)] transition-all duration-200"
        >
          Contact
        </button>
      </div>
    </header>
  )
}
