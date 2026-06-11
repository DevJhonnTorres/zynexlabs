import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { SERVICES, METHODOLOGY_STEPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services — Zynex Labs',
  description: 'Five specialized technology verticals: AI & Automation, Software Development, Blockchain & Web3, Cloud & DevOps, and UI/UX & Product Design.',
}

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
          className={`border-b border-[var(--border)] px-12 py-20 ${
            i % 2 === 1 ? 'bg-[var(--surface)]' : ''
          }`}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-[1fr_1.5fr] gap-20 items-start">
              <div className="sticky top-24">
                <div className="font-mono text-[10px] tracking-[3px] text-[var(--label)] mb-3">{svc.num}</div>
                <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-4">
                  {svc.title}
                </h2>
                <p className="text-[14px] text-[var(--muted)] font-medium mb-6 leading-[1.5] opacity-60">
                  {svc.tagline}
                </p>
                <p className="text-[14px] text-[var(--dim)] leading-[1.9] mb-10 opacity-70">{svc.description}</p>
                <div>
                  <div className="font-mono text-[9px] tracking-[2px] text-[var(--dim)] mb-4 uppercase">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {svc.tech.map(t => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-[var(--dim)] border border-[var(--border)] px-2.5 py-1.5 hover:border-[rgba(255,255,255,0.18)] hover:text-[var(--muted)] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="font-mono text-[9px] tracking-[2px] text-[var(--dim)] mb-5 uppercase">Scope of Work</div>
                <div className="divide-y divide-[var(--border)]">
                  {svc.items.map((item, j) => (
                    <AnimatedSection key={item} delay={j * 0.04} direction="none">
                      <div className="py-4 flex items-start gap-5 cursor-default group">
                        <span className="font-mono text-[9px] text-[var(--dim)] mt-0.5 w-6 shrink-0">
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[14px] text-[var(--dim)] leading-[1.7] group-hover:text-[var(--muted)] transition-colors opacity-70">
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
      <section className="border-b border-[var(--border)] px-12 py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[var(--label)] mb-4">METHODOLOGY</div>
          <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-16">
            How We<br />Build
          </h2>
          <div className="grid grid-cols-5 gap-6 relative">
            <div className="absolute top-[10px] left-0 right-0 h-px bg-[var(--border)]" />
            {METHODOLOGY_STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1} direction="up">
                <div className="relative pt-8">
                  <div className="absolute top-[6px] left-0 w-2 h-2 rounded-full bg-white" />
                  <div className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] mb-2">{step.num}</div>
                  <div className="text-[13px] font-bold text-white mb-2">{step.title}</div>
                  <div className="text-[11px] text-[var(--dim)] leading-[1.7] opacity-70">{step.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 py-24 text-center">
        <div className="max-w-[560px] mx-auto">
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-[-2px] leading-[1.05] mb-6">
              Ready to start a project?
            </h2>
            <p className="text-[15px] text-[var(--muted)] leading-[1.75] mb-8 opacity-50">
              Book a free 30-minute discovery call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-bold text-[13px] px-10 py-4 hover:bg-[rgba(255,255,255,0.85)] transition-colors duration-200 no-underline"
            >
              Book a Discovery Call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
