'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { COMPANY, CALENDLY_URL, FAQ } from '@/lib/constants'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        section="04 · CONTACT"
        title="Let's Build Together"
        subtitle="Free 30-minute discovery call. We understand your challenge, share our approach, and tell you honestly whether we are the right fit."
      />

      {/* Main CTA block */}
      <section className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.015)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-start">
            {/* Left: what to expect */}
            <AnimatedSection direction="left">
              <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">THE CALL</div>
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-6">
                What to Expect
              </h2>
              <p className="text-[14px] text-[#555] leading-[1.9] mb-10">
                The discovery call is a structured 30-minute conversation, not a sales pitch. By the end of it, you will have a clear picture of how we would approach your project and what the realistic path to production looks like.
              </p>
              <div className="divide-y divide-[rgba(255,255,255,0.05)]">
                {[
                  ['You describe your project', 'We listen without interrupting. Context and constraints first.'],
                  ['We ask the right questions', 'Scope, timeline, technical constraints, team structure, budget range.'],
                  ['We share our assessment', 'Honest evaluation of fit, approach, and realistic expectations.'],
                  ['We define next steps', 'If there is alignment, we propose a concrete engagement structure.'],
                ].map(([title, desc], i) => (
                  <div key={title} className="py-4 flex items-start gap-5">
                    <span className="font-mono text-[9px] text-[rgba(255,106,0,0.4)] mt-1 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-[13px] font-bold text-[#ccc] mb-1">{title}</div>
                      <div className="text-[12px] text-[#444] leading-[1.7]">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: CTA + contact info */}
            <AnimatedSection direction="right">
              <div className="border border-[rgba(255,255,255,0.07)] p-8 mb-4">
                <div className="font-mono text-[9px] tracking-[3px] text-[rgba(255,106,0,0.5)] mb-4">DISCOVERY CALL</div>
                <p className="text-[14px] text-[#555] leading-[1.75] mb-6">
                  30 minutes. Free. No commitment required. Available via Calendly — pick a time that works for you.
                </p>
                <button
                  onClick={() => window.open(CALENDLY_URL, '_blank')}
                  className="w-full bg-[#FF6A00] text-black font-bold text-[14px] py-4 hover:bg-[#ff7c1a] transition-colors duration-200 cursor-pointer"
                >
                  Book a Free Call via Calendly
                </button>
                <div className="mt-4 font-mono text-[9px] text-[#2a2a2a] tracking-[2px] text-center">
                  FREE 30-MIN · NO COMMITMENT · CALENDLY
                </div>
              </div>

              <div className="border border-[rgba(255,255,255,0.07)] p-8">
                <div className="font-mono text-[9px] tracking-[3px] text-[rgba(255,106,0,0.5)] mb-5">CONTACT DETAILS</div>
                <div className="space-y-4">
                  {[
                    ['Email', COMPANY.email],
                    ['Company', COMPANY.name],
                    ['Location', `${COMPANY.location} — Remote-first`],
                    ['Founded', String(COMPANY.founded)],
                    ['Response time', 'Within 24 hours on business days'],
                    ['Languages', 'Spanish and English'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline gap-4">
                      <span className="font-mono text-[9px] text-[#333] tracking-[2px] w-28 shrink-0 uppercase">{label}</span>
                      <span className="text-[13px] text-[#555]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[rgba(255,255,255,0.07)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">FAQ</div>
          <div className="grid grid-cols-[1fr_2fr] gap-20 items-start">
            <div className="sticky top-24">
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-4">
                Frequently<br />Asked
              </h2>
              <p className="text-[14px] text-[#555] leading-[1.75]">
                The questions we get on almost every discovery call.
              </p>
            </div>

            <div className="divide-y divide-[rgba(255,255,255,0.06)]">
              {FAQ.map((item, i) => (
                <AnimatedSection key={item.question} delay={i * 0.05} direction="none">
                  <div className="py-7">
                    <div className="flex items-start gap-5 mb-3">
                      <span className="font-mono text-[9px] text-[#2a2a2a] tracking-[2px] mt-1 w-6 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="text-[15px] font-bold text-[#ccc]">{item.question}</div>
                    </div>
                    <div className="pl-11 text-[14px] text-[#555] leading-[1.85]">{item.answer}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-12 py-24 text-center">
        <div className="max-w-[520px] mx-auto">
          <AnimatedSection>
            <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-6 flex justify-center">
              ZYNEX LABS · {COMPANY.location.toUpperCase()} → WORLD
            </div>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-[-2px] leading-[1.05] mb-6">
              Build something that lasts.
            </h2>
            <p className="text-[15px] text-[#555] leading-[1.75] mb-8">
              Reach us directly at{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[#FF6A00] no-underline hover:underline"
              >
                {COMPANY.email}
              </a>{' '}
              or book a call using the link above.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
