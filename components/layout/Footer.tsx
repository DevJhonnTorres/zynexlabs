import Link from 'next/link'
import { COMPANY, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 md:px-12 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="text-[13px] font-bold tracking-[4px] uppercase text-white mb-5">
              ZYNEX LABS
            </div>
            <p className="text-[13px] text-[var(--muted)] leading-[1.8] max-w-[260px] mb-5 opacity-50">
              Advanced technology infrastructure. AI · Automation · Web3 · Software. Founded {COMPANY.founded}, Colombia.
            </p>
            <div className="font-mono text-[10px] text-[var(--dim)] tracking-[2px] space-y-1.5">
              <div>{COMPANY.email}</div>
              <div>{COMPANY.name}</div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="font-mono text-[9px] text-[var(--label)] tracking-[3px] mb-5 uppercase">Navigation</div>
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-[12px] text-[var(--dim)] py-1.5 no-underline hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="font-mono text-[9px] text-[var(--label)] tracking-[3px] mb-5 uppercase">Services</div>
            {['AI & Automation', 'Software Dev', 'Blockchain & Web3', 'Cloud & DevOps', 'UI/UX & Product'].map(s => (
              <Link
                key={s}
                href="/services"
                className="block text-[12px] text-[var(--dim)] py-1.5 no-underline hover:text-white transition-colors duration-200"
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div className="font-mono text-[9px] text-[var(--label)] tracking-[3px] mb-5 uppercase">Connect</div>
            {['LinkedIn', 'GitHub', 'Twitter / X', 'Instagram'].map(s => (
              <a
                key={s}
                href="#"
                className="block text-[12px] text-[var(--dim)] py-1.5 no-underline hover:text-white transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />
        <div className="flex items-center justify-between font-mono text-[10px] text-[var(--dim)] tracking-[2px]">
          <span>© {COMPANY.founded} {COMPANY.name.toUpperCase()} · ALL RIGHTS RESERVED</span>
          <span>COLOMBIA → WORLD</span>
        </div>
      </div>
    </footer>
  )
}
