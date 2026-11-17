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

const smallLabel = 'mb-4 font-mono text-[12px] uppercase tracking-[2px] text-[var(--label)]'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        section="01 · SERVICES"
        title="What We Build"
        subtitle="Five specialized verticals covering the full spectrum of modern technology infrastructure."
      />

      {SERVICES.map((svc, i) => (
        <section
          key={svc.slug}
          id={svc.slug}
          className={`scroll-mt-16 border-b border-[var(--border)] px-5 py-14 md:px-12 md:py-20 ${
            i % 2 === 1 ? 'bg-[var(--surface)]' : ''
          }`}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
              <div className="lg:sticky lg:top-24">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(255,106,0,0.3)] bg-[var(--accent-soft)] text-accent-2">
                    <ServiceIcon name={svc.icon} />
                  </div>
                  <span className="font-mono text-[12px] tracking-[2px] text-accent-2">{svc.num}</span>
                </div>
                <h2 className="mb-4 text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.1] tracking-[-1px]">{svc.title}</h2>
                <p className="mb-5 text-[17px] font-medium leading-[1.5] text-[var(--text)]">{svc.tagline}</p>
                <p className="mb-8 text-[15px] leading-[1.8] text-[var(--muted)]">{svc.description}</p>
                <div className={smallLabel}>Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {svc.tech.map(t => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className={smallLabel}>Scope of Work</div>
                <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 md:px-6">
                  {svc.items.map((item, j) => (
                    <AnimatedSection key={item} delay={j * 0.03} direction="none">
                      <div className="group flex cursor-default items-start gap-4 py-4">
                        <span className="mt-0.5 w-6 shrink-0 font-mono text-[12px] text-accent-2">
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[15px] leading-[1.6] text-[var(--muted)] transition-colors group-hover:text-white">
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
      <section className="border-b border-[var(--border)] px-5 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow="Methodology" title="How we build" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {METHODOLOGY_STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,106,0,0.5)] font-mono text-[12px] font-bold text-accent-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="mb-2 text-[16px] font-bold text-white">{step.title}</div>
                  <div className="text-[14px] leading-[1.7] text-[var(--muted)]">{step.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 md:px-12 md:py-24">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-elev)] px-6 py-14 text-center md:px-12">
          <div className="glow-orange pointer-events-none absolute inset-0" aria-hidden="true" />
          <AnimatedSection>
            <div className="relative">
              <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-black tracking-[-1.2px]">Ready to start a project?</h2>
              <p className="mb-8 text-[16px] text-[var(--muted)]">Book a free 30-minute discovery call.</p>
              <Button href="/contact" size="lg">Book a discovery call</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
