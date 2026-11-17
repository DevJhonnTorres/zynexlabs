import Link from 'next/link'
import { COMPANY, NAV_LINKS, SERVICES, SOCIAL_LINKS } from '@/lib/constants'
import { Logo } from '@/components/ui/Logo'

const colTitle = 'mb-5 font-mono text-[12px] uppercase tracking-[2px] text-[var(--label)]'
const colLink = 'block py-1.5 text-[14px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-accent-2'

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg)] px-5 py-16 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="mb-5 inline-block no-underline" aria-label="Zynex Labs home">
              <Logo />
            </Link>
            <p className="mb-5 max-w-[320px] text-[15px] leading-[1.7] text-[var(--muted)]">
              Advanced technology infrastructure. AI, automation, Web3 and software, engineered in Colombia for the world.
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-mono text-[13px] text-accent-2 no-underline hover:text-white"
            >
              {COMPANY.email}
            </a>
          </div>

          <div>
            <div className={colTitle}>Navigation</div>
            {NAV_LINKS.map(link => (
              <Link key={link.label} href={link.href} className={colLink}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className={colLink}>
              Contact
            </Link>
          </div>

          <div>
            <div className={colTitle}>Services</div>
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services#${s.slug}`} className={colLink}>
                {s.title}
              </Link>
            ))}
          </div>

          <div>
            <div className={colTitle}>Connect</div>
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={colLink}>
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mb-6 h-px bg-[var(--border)]" />
        <div className="flex flex-col gap-2 text-[13px] text-[var(--dim)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </span>
          <span className="font-mono text-[12px] tracking-[1.5px]">COLOMBIA → WORLD</span>
        </div>
      </div>
    </footer>
  )
}
