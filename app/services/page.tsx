import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ServiceIcon } from '@/components/ui/Icons'
import { SERVICES, METHODOLOGY_STEPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services — Zynex Labs',
  description: 'Five specialized technology verticals: AI & Automation, Software Development, Blockchain & Web3, Cloud & DevOps, and UI/UX & Product Design.',
}

const smallLabel = 'mb-4 text-[12px] uppercase tracking-[0.25em] text-[var(--label)]'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        number="01"
        section="Services"
        title="What we"
        titleItalic="build."
        subtitle="Five specialized verticals covering the full spectrum of modern technology infrastructure."
      />

      {SERVICES.map((svc, i) => (
        <section
          key={svc.slug}
          id={svc.slug}
          className={`scroll-mt-20 border-b border-[var(--line)] px-5 py-14 md:px-12 md:py-20 ${
            i % 2 === 1 ? 'bg-[var(--surface)]' : ''
          }`}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
              <div className="lg:sticky lg:top-24">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border border-[var(--ink)] bg-white text-[var(--ink)]">
                    <ServiceIcon name={svc.icon} />
                  </div>
                  <span className="font-mono text-[13px] tracking-[0.1em] text-[var(--label)]">{svc.num}</span>
                </div>
                <h2 className="mb-4 font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.05] tracking-[-0.04em]">{svc.title}</h2>
                <p className="mb-5 text-[18px] leading-[1.5] text-[var(--ink)]">{svc.tagline}</p>
                <p className="mb-8 text-[16px] leading-[1.8] text-[var(--muted)]">{svc.description}</p>
                <div className={smallLabel}>Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {svc.tech.map(t => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className={smallLabel}>Scope of Work</div>
                <div className="divide-y divide-[var(--line)] border border-[var(--line)] bg-white px-5 md:px-6">
                  {svc.items.map((item, j) => (
                    <AnimatedSection key={item} delay={j * 0.03} direction="none">
                      <div className="group flex cursor-default items-start gap-4 py-4">
                        <span className="mt-0.5 w-6 shrink-0 font-mono text-[12px] text-[var(--label)]">
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[16px] leading-[1.6] text-[var(--muted)] transition-colors group-hover:text-[var(--ink)]">
                          {item}
                        </span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Methodology */}
      <section className="border-b border-[var(--line)] px-5 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading number="02" eyebrow="Methodology" title="How we" titleItalic="build." />
          <div className="grid grid-cols-1 border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
            {METHODOLOGY_STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08} className="h-full">
                <div className="h-full border-b border-r border-[var(--line)] bg-white p-6 transition-colors hover:bg-[var(--surface)]">
                  <div className="mb-6 font-mono text-[12px] tracking-[0.1em] text-[var(--label)]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="mb-2 font-display text-[22px] font-medium tracking-[-0.02em] text-[var(--ink)]">{step.title}</div>
                  <div className="text-[15px] leading-[1.7] text-[var(--muted)]">{step.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-20 text-white md:px-12 md:py-28">
        <div className="bg-grid-inverse pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px] text-center">
          <AnimatedSection>
            <div className="relative">
              <h2 className="mb-4 font-display text-[clamp(40px,6vw,80px)] font-medium leading-[1] tracking-[-0.045em]">Ready to <em>start?</em></h2>
              <p className="mb-8 text-[18px] text-white/70">Book a free 30-minute discovery call.</p>
              <Button href="/contact" size="lg" variant="inverse">Book a discovery call</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
