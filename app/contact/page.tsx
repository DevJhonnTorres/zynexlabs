'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { COMPANY, FAQ } from '@/lib/constants'
import { CalendarBooking } from '@/components/calendar/CalendarBooking'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        section="04 · CONTACT"
        title="Let's Build Together"
        subtitle="Free 30-minute discovery call. We understand your challenge and tell you honestly whether we are the right fit."
      />

      <section className="border-b border-[var(--border)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <AnimatedSection direction="left">
              <SectionHeading eyebrow="The call" title="What to expect" className="!mb-6" />
              <p className="mb-8 text-[16px] leading-[1.8] text-[var(--muted)]">
                The discovery call is a structured 30-minute conversation. By the end of it, you will have a clear picture of how we would approach your project.
              </p>
              <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5">
                {[
                  ['You describe your project', 'We listen without interrupting. Context and constraints first.'],
                  ['We ask the right questions', 'Scope, timeline, technical constraints, team structure, budget range.'],
                  ['We share our assessment', 'Honest evaluation of fit, approach, and realistic expectations.'],
                  ['We define next steps', 'If there is alignment, we propose a concrete engagement structure.'],
                ].map(([title, desc], i) => (
                  <div key={title} className="flex items-start gap-4 py-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(255,106,0,0.5)] font-mono text-[12px] font-bold text-accent-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="mb-1 text-[16px] font-bold text-white">{title}</div>
                      <div className="text-[14px] leading-[1.7] text-[var(--muted)]">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="mb-5">
                <div className="mb-3 font-mono text-[12px] uppercase tracking-[2px] text-accent-2">Discovery call</div>
                <p className="mb-5 text-[15px] text-[var(--muted)]">30 minutes. Free. No commitment required.</p>
                <CalendarBooking />
              </Card>
              <Card>
                <div className="mb-5 font-mono text-[12px] uppercase tracking-[2px] text-accent-2">Contact details</div>
                <div className="space-y-4">
                  {[
                    ['Email', COMPANY.email],
                    ['Company', COMPANY.name],
                    ['Location', `${COMPANY.location} — Remote-first`],
                    ['Languages', 'Spanish and English'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="w-24 shrink-0 font-mono text-[12px] uppercase tracking-[1.5px] text-[var(--label)]">{label}</span>
                      <span className="break-words text-[15px] text-[var(--text)]">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div className="lg:sticky lg:top-24">
              <SectionHeading eyebrow="FAQ" title={<>Frequently<br />asked</>} className="!mb-0" />
            </div>
            <div className="divide-y divide-[var(--border)]">
              {FAQ.map((item, i) => (
                <AnimatedSection key={item.question} delay={i * 0.04} direction="none">
                  <div className="py-6">
                    <div className="mb-3 flex items-start gap-4">
                      <span className="mt-1 w-6 shrink-0 font-mono text-[12px] tracking-[1.5px] text-accent-2">{String(i + 1).padStart(2, '0')}</span>
                      <div className="text-[17px] font-bold text-white">{item.question}</div>
                    </div>
                    <div className="pl-10 text-[15px] leading-[1.8] text-[var(--muted)]">{item.answer}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center md:px-12 md:py-24">
        <div className="mx-auto max-w-[560px]">
          <AnimatedSection>
            <h2 className="mb-5 text-[clamp(28px,4vw,44px)] font-black leading-[1.05] tracking-[-1.2px]">Build something that lasts.</h2>
            <p className="text-[16px] leading-[1.75] text-[var(--muted)]">
              Reach us at{' '}
              <a href={`mailto:${COMPANY.email}`} className="font-medium text-accent-2 no-underline hover:underline">
                {COMPANY.email}
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
