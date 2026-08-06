'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
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

      <section className="border-b border-[var(--border)] px-6 md:px-12 py-10 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start">
            <AnimatedSection direction="left">
              <div className="font-mono text-[10px] tracking-[3px] text-[var(--label)] mb-4">THE CALL</div>
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-6">What to Expect</h2>
              <p className="text-[14px] text-[var(--dim)] leading-[1.9] mb-10 opacity-70">
                The discovery call is a structured 30-minute conversation. By the end of it, you will have a clear picture of how we would approach your project.
              </p>
              <div className="divide-y divide-[var(--border)]">
                {[
                  ['You describe your project', 'We listen without interrupting. Context and constraints first.'],
                  ['We ask the right questions', 'Scope, timeline, technical constraints, team structure, budget range.'],
                  ['We share our assessment', 'Honest evaluation of fit, approach, and realistic expectations.'],
                  ['We define next steps', 'If there is alignment, we propose a concrete engagement structure.'],
                ].map(([title, desc], i) => (
                  <div key={title} className="py-4 flex items-start gap-5">
                    <span className="font-mono text-[9px] text-[var(--dim)] mt-1 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="text-[13px] font-bold text-white mb-1">{title}</div>
                      <div className="text-[12px] text-[var(--dim)] leading-[1.7] opacity-70">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="border border-[var(--border)] p-8 mb-4">
                <div className="font-mono text-[9px] tracking-[3px] text-[var(--label)] mb-4">DISCOVERY CALL</div>
                <p className="text-[14px] text-[var(--dim)] leading-[1.75] mb-6 opacity-70">30 minutes. Free. No commitment required.</p>
                <div className="w-full">
                  <CalendarBooking />
                </div>
                <div className="mt-4 font-mono text-[9px] text-[var(--dim)] tracking-[2px] text-center">FREE 30-MIN · NO COMMITMENT</div>
              </div>
              <div className="border border-[var(--border)] p-8">
                <div className="font-mono text-[9px] tracking-[3px] text-[var(--label)] mb-5">CONTACT DETAILS</div>
                <div className="space-y-4">
                  {[
                    ['Email', COMPANY.email],
                    ['Company', COMPANY.name],
                    ['Location', `${COMPANY.location} — Remote-first`],
                    ['Languages', 'Spanish and English'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline gap-4">
                      <span className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] w-28 shrink-0 uppercase">{label}</span>
                      <span className="text-[13px] text-[var(--muted)] opacity-50">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-6 md:px-12 py-10 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[var(--label)] mb-4">FAQ</div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div className="sticky top-24">
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-4">Frequently<br />Asked</h2>
            </div>
            <div className="divide-y divide-[var(--border)]">
              {FAQ.map((item, i) => (
                <AnimatedSection key={item.question} delay={i * 0.05} direction="none">
                  <div className="py-7">
                    <div className="flex items-start gap-5 mb-3">
                      <span className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] mt-1 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <div className="text-[15px] font-bold text-white">{item.question}</div>
                    </div>
                    <div className="pl-11 text-[14px] text-[var(--dim)] leading-[1.85] opacity-70">{item.answer}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 md:py-24 text-center">
        <div className="max-w-[520px] mx-auto">
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-[-2px] leading-[1.05] mb-6">Build something that lasts.</h2>
            <p className="text-[15px] text-[var(--muted)] leading-[1.75] mb-8 opacity-50">
              Reach us at{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-white no-underline hover:underline">
                {COMPANY.email}
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
