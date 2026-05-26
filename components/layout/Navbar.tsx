'use client'

import { CALENDLY_URL, NAV_LINKS } from '@/lib/constants'

export function Navbar() {
  const openCalendly = () => window.open(CALENDLY_URL, '_blank')

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-12 h-16 bg-[rgba(2,2,5,0.75)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.06)] transition-colors hover:border-[rgba(255,106,0,0.22)]">
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 no-underline">
        <div
          className="w-[34px] h-[34px] flex items-center justify-center font-black text-[17px] text-white"
          style={{
            background: 'linear-gradient(135deg, #FF6A00, #CC4400)',
            clipPath: 'polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)',
            animation: 'logo-beat 3s ease-in-out infinite',
            boxShadow: '0 0 18px rgba(255,106,0,0.55)',
          }}
        >
          Z
        </div>
        <div>
          <div className="font-mono font-black text-[15px] tracking-[3px] leading-none">
            <span className="text-[#FF6A00]">Z</span>YNEX <span className="text-[#FF6A00]">LABS</span>
          </div>
          <div className="font-mono text-[7px] text-[#444] tracking-[3px] mt-0.5">
            TECHNOLOGY · INNOVATION · FUTURE
          </div>
        </div>
      </a>

      {/* Links */}
      <ul className="flex gap-8 list-none m-0 p-0">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[11px] tracking-[2px] uppercase text-[#888] no-underline relative transition-colors hover:text-white group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#FF6A00] scale-x-0 group-hover:scale-x-100 transition-transform duration-[250ms] origin-left block" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={openCalendly}
        className="font-mono text-[11px] tracking-[2px] uppercase text-[#FF6A00] border border-[rgba(255,106,0,0.22)] px-5 py-2 rounded-sm bg-[rgba(255,106,0,0.08)] transition-all duration-[250ms] hover:bg-[rgba(255,106,0,0.15)] hover:shadow-[0_0_24px_rgba(255,106,0,0.25)] hover:text-white cursor-pointer"
      >
        [ Schedule a Call ]
      </button>
    </nav>
  )
}
