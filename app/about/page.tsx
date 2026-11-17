import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { COMPANY, STACK_GROUPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About — Zynex Labs',
  description: 'Zynex Labs S.A.S. — advanced technology infrastructure company founded in Colombia in 2024.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        section="03 · ABOUT"
        title="About Zynex Labs"
        subtitle={`Advanced technology infrastructure company, founded in Colombia in ${COMPANY.founded}.`}
      />

      <section className="border-b border-[var(--border)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <AnimatedSection direction="left">
              <SectionHeading eyebrow="The company" title="Who we are" className="!mb-8" />
              <div>
                {[
                  ['Legal name', COMPANY.name],
                  ['Founded', String(COMPANY.founded)],
                  ['Location', COMPANY.location],
                  ['Contact', COMPANY.email],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1 border-b border-[var(--border)] py-3 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="w-28 shrink-0 font-mono text-[12px] uppercase tracking-[1.5px] text-[var(--label)]">{label}</span>
                    <span className="break-words text-[15px] text-[var(--text)]">{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-5 text-[16px] leading-[1.85] text-[var(--muted)]">
                <p>Zynex Labs S.A.S. was founded in {COMPANY.founded} in Colombia to address a clear gap in the Latin American technology market: the absence of a firm that combines deep technical expertise with international delivery standards.</p>
                <p>We specialize in four interconnected disciplines — artificial intelligence, software engineering, blockchain infrastructure, and cloud operations — because the most valuable systems at the frontier of technology require expertise across all four.</p>
                <p>Our model is senior-led and small by design. We do not operate with a layer of project managers between the client and the engineers doing the work.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2">
          {[
            { label: 'Mission', text: COMPANY.mission },
            { label: 'Vision', text: COMPANY.vision },
          ].map((item, i) => (
            <AnimatedSection key={item.label} className="h-full">
              <Card highlight={i === 0} className="h-full md:p-9">
                <div className="mb-5 font-mono text-[12px] uppercase tracking-[2px] text-accent-2">{item.label}</div>
                <p className="text-[18px] font-light leading-[1.7] text-[var(--text)]">{item.text}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow="Principles" title="How we operate" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {COMPANY.values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.06} className="h-full">
                <Card hover className="h-full">
                  <div className="mb-4 font-mono text-[12px] tracking-[2px] text-accent-2">{String(i + 1).padStart(2, '0')}</div>
                  <div className="mb-3 text-[19px] font-bold text-white">{val.title}</div>
                  <p className="text-[15px] leading-[1.8] text-[var(--muted)]">{val.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow="Technology" title="Our technology stack" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
            {STACK_GROUPS.map((group, gi) => (
              <AnimatedSection key={group.title} delay={gi * 0.06}>
                <div className="mb-4 border-b border-[var(--border-strong)] pb-3 font-mono text-[12px] uppercase tracking-[2px] text-accent-2">
                  {group.title}
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {group.items.map(item => (
                    <div key={item} className="cursor-default py-2 text-[14px] text-[var(--muted)] transition-colors hover:text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-24">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-elev)] px-6 py-14 text-center md:px-12">
          <div className="glow-orange pointer-events-none absolute inset-0" aria-hidden="true" />
          <AnimatedSection>
            <div className="relative">
              <h2 className="mb-8 text-[clamp(28px,4vw,44px)] font-black tracking-[-1.2px]">Work with us</h2>
              <Button href="/contact" size="lg">Schedule a discovery call</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
