import Link from 'next/link'
import { COMPANY, NAV_LINKS, SERVICES, SOCIAL_LINKS } from '@/lib/constants'
import { Logo } from '@/components/ui/Logo'

const colTitle = 'mb-5 text-[12px] uppercase tracking-[0.25em] text-[var(--label)]'
const colLink = 'block py-1.5 text-[15px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--ink)]'

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] bg-white px-5 pb-8 pt-16 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="mb-6 inline-block no-underline" aria-label="Zynex Labs home">
              <Logo size="lg" />
            </Link>
            <p className="mb-5 max-w-[340px] text-[16px] leading-[1.7] text-[var(--muted)]">
              Advanced technology infrastructure. AI, automation, Web3 and software, engineered in Colombia for the world.
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-mono text-[13px] text-[var(--blue)] no-underline hover:text-[var(--ink)]"
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
            <a href={`mailto:${COMPANY.email}`} className={colLink}>
              Email ↗
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--line)] pt-6 font-mono text-[12px] tracking-[0.1em] text-[var(--label)]">
          © {new Date().getFullYear()} ZYNEX LABS S.A.S. · COLOMBIA → WORLD
        </div>
      </div>
    </footer>
  )
}
