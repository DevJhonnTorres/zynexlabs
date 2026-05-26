import Link from 'next/link'
import { COMPANY, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] px-12 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 bg-[#FF6A00] rounded-full shadow-[0_0_8px_#FF6A00]" />
              <span className="text-[14px] font-black tracking-[3px] uppercase">ZYNEX LABS</span>
            </div>
            <p className="text-[13px] text-[#444] leading-[1.8] max-w-[260px] mb-5">
              Advanced technology infrastructure. AI · Automation · Web3 · Software. Founded {COMPANY.founded}, Colombia.
            </p>
            <div className="font-mono text-[10px] text-[#333] tracking-[2px] space-y-1.5">
              <div>{COMPANY.email}</div>
              <div>{COMPANY.name}</div>
              <div>{COMPANY.location}</div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="font-mono text-[9px] text-[rgba(255,106,0,0.5)] tracking-[3px] mb-5">NAVIGATION</div>
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-[12px] text-[#444] py-1.5 no-underline hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="font-mono text-[9px] text-[rgba(255,106,0,0.5)] tracking-[3px] mb-5">SERVICES</div>
            {['AI & Automation', 'Software Dev', 'Blockchain & Web3', 'Cloud & DevOps', 'UI/UX & Product'].map(s => (
              <Link
                key={s}
                href="/services"
                className="block text-[12px] text-[#444] py-1.5 no-underline hover:text-white transition-colors duration-200"
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div className="font-mono text-[9px] text-[rgba(255,106,0,0.5)] tracking-[3px] mb-5">CONNECT</div>
            {['LinkedIn', 'GitHub', 'Twitter / X', 'Instagram'].map(s => (
              <a
                key={s}
                href="#"
                className="block text-[12px] text-[#444] py-1.5 no-underline hover:text-[#FF6A00] transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-[rgba(255,255,255,0.06)] mb-6" />
        <div className="flex items-center justify-between font-mono text-[10px] text-[#2a2a2a] tracking-[2px]">
          <span>© {COMPANY.founded} {COMPANY.name.toUpperCase()} · ALL RIGHTS RESERVED</span>
          <span>COLOMBIA → WORLD</span>
        </div>
      </div>
    </footer>
  )
}
