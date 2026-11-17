import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ScrollCanvas } from '@/components/canvas/ScrollCanvas'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ServiceIcon } from '@/components/ui/Icons'
import { AppCard } from '@/components/apps/AppCard'
import { SERVICES, PROJECTS, APPS, METHODOLOGY_STEPS, TECH_STRIP, COMPANY } from '@/lib/constants'

const firstSentence = (s: string) => {
  const m = s.match(/^.*?[.!?](\s|$)/)
  return (m ? m[0] : s).trim()
}

const sectionCls = 'relative px-5 py-16 md:px-12 md:py-24'
const layerStyle = { background: 'var(--bg)', position: 'relative' as const, zIndex: 3 }

export default function Home() {
  const featured = APPS.filter(a => a.featured).slice(0, 6)

  return (
    <>
      {/* Fixed 3D canvas + hero overlay — background of the entire page */}
      <ScrollCanvas />

      {/* Hero spacer — scroll room while fixed hero is visible */}
      <div style={{ height: '100vh', position: 'relative', zIndex: 3 }} />

      {/* ── Trust strip ── */}
      <section className="border-y border-[var(--border)] py-8" style={layerStyle}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-12">
          <div className="mb-5 text-center font-mono text-[12px] uppercase tracking-[2.5px] text-[var(--label)]">Built with</div>
        </div>
        <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
            maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          }}
        >
          <div className="marquee-track flex gap-3">
            {[...TECH_STRIP, ...TECH_STRIP, ...TECH_STRIP, ...TECH_STRIP].map((t, i) => (
              <span
                key={`${t}-${i}`}
                aria-hidden={i >= TECH_STRIP.length}
                className="whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 font-mono text-[13px] text-[var(--muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={sectionCls} style={layerStyle}>
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="01 · Services"
            title="What we build"
            subtitle="Five specialized lines covering the full spectrum of modern technology infrastructure."
            linkHref="/services"
            linkLabel="All services →"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.slug} delay={i * 0.06} className="h-full">
                <Link href={`/services#${svc.slug}`} className="block h-full no-underline">
                  <Card hover className="flex h-full flex-col">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,106,0,0.3)] bg-[var(--accent-soft)] text-accent-2">
                      <ServiceIcon name={svc.icon} />
                    </div>
                    <h3 className="mb-2 text-[20px] font-bold leading-tight text-white">{svc.title}</h3>
                    <p className="mb-5 text-[15px] leading-[1.65] text-[var(--muted)]">{svc.tagline}</p>
                    <ul className="mb-6 space-y-2">
                      {svc.items.slice(0, 3).map(item => (
                        <li key={item} className="flex gap-2.5 text-[14px] leading-[1.5] text-[var(--muted)]">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto text-[14px] font-medium text-accent-2">Learn more →</span>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live apps ── */}
      <section className={sectionCls} style={layerStyle}>
        <div
          className="glow-orange pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] max-w-full -translate-x-1/2 opacity-60"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="02 · Apps"
            title="Live products"
            subtitle="Real software, deployed and running in production. Open any of them and try it."
            linkHref="/apps"
            linkLabel="View all apps →"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((app, i) => (
              <AnimatedSection key={app.slug} delay={(i % 3) * 0.07} className="h-full">
                <AppCard app={app} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/apps" variant="secondary" size="lg">
              View all {APPS.length} apps →
            </Button>
          </div>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section className={sectionCls} style={layerStyle}>
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="03 · Projects"
            title="Selected work"
            linkHref="/projects"
            linkLabel="All projects →"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {PROJECTS.slice(0, 2).map((p, i) => (
              <AnimatedSection key={p.hash} delay={i * 0.08} className="h-full">
                <Link href="/projects" className="block h-full no-underline">
                  <Card hover className="flex h-full flex-col md:p-8">
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <span className="font-mono text-[12px] uppercase tracking-[1.5px] text-[var(--label)]">{p.vertical}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[12px] text-[var(--dim)]">{p.year}</span>
                        <Badge tone={p.status === 'LIVE' ? 'live' : 'accent'}>{p.status}</Badge>
                      </div>
                    </div>
                    <h3 className="mb-2 text-[22px] font-bold leading-[1.2] text-white">{p.title}</h3>
                    <p className="mb-4 text-[15px] font-medium text-accent-2">{p.subtitle}</p>
                    <p className="mb-6 text-[15px] leading-[1.75] text-[var(--muted)]">{p.description}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map(t => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={sectionCls} style={layerStyle}>
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow="04 · Process" title="How we build" subtitle="A disciplined five-step process, from discovery to operations." />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
            <div className="absolute bottom-2 left-[19px] top-2 w-px bg-[var(--border-strong)] lg:bottom-auto lg:left-0 lg:right-0 lg:top-[19px] lg:h-px lg:w-auto" aria-hidden="true" />
            {METHODOLOGY_STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08}>
                <div className="relative flex gap-5 lg:block">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(255,106,0,0.5)] bg-[var(--bg)] font-mono text-[13px] font-bold text-accent-2 lg:mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="mb-2 text-[17px] font-bold text-white">{step.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-[var(--muted)]">{firstSentence(step.desc)}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-5 pb-20 pt-8 md:px-12 md:pb-28" style={layerStyle}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-elev)] px-6 py-16 text-center md:px-12 md:py-24">
              <div className="glow-orange pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="relative mx-auto max-w-[640px]">
                <h2 className="mb-5 text-[clamp(32px,5.5vw,60px)] font-black leading-[1.05] tracking-[-0.03em]">
                  Let&apos;s build <span className="text-gradient-accent">what&apos;s next.</span>
                </h2>
                <p className="mb-9 text-[17px] leading-[1.7] text-[var(--muted)]">
                  Free 30-minute discovery call. We understand your challenge and tell you honestly whether we are the right fit.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button href="/contact" size="lg">Book a free call</Button>
                  <a href={`mailto:${COMPANY.email}`} className="text-[15px] font-medium text-[var(--muted)] no-underline transition-colors hover:text-accent-2">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
