import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
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

      <section className="border-b border-[var(--border)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[1fr_1.4fr] gap-20 items-start">
            <AnimatedSection direction="left">
              <div className="font-mono text-[10px] tracking-[3px] text-[var(--label)] mb-4">THE COMPANY</div>
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-4">Who We Are</h2>
              <div className="space-y-1 mt-8">
                {[
                  ['Legal name', COMPANY.name],
                  ['Founded', String(COMPANY.founded)],
                  ['Location', COMPANY.location],
                  ['Contact', COMPANY.email],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline gap-4 py-3 border-b border-[var(--border)]">
                    <span className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] w-24 shrink-0 uppercase">{label}</span>
                    <span className="text-[13px] text-[var(--muted)] opacity-60">{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-5 text-[15px] text-[var(--dim)] leading-[1.9] opacity-70">
                <p>Zynex Labs S.A.S. was founded in {COMPANY.founded} in Colombia to address a clear gap in the Latin American technology market: the absence of a firm that combines deep technical expertise with international delivery standards.</p>
                <p>We specialize in four interconnected disciplines — artificial intelligence, software engineering, blockchain infrastructure, and cloud operations — because the most valuable systems at the frontier of technology require expertise across all four.</p>
                <p>Our model is senior-led and small by design. We do not operate with a layer of project managers between the client and the engineers doing the work.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Mission', text: COMPANY.mission },
              { label: 'Vision',  text: COMPANY.vision },
            ].map(item => (
              <AnimatedSection key={item.label}>
                <div className="border border-[var(--border)] p-10 h-full">
                  <div className="font-mono text-[9px] tracking-[3px] text-[var(--label)] mb-5 uppercase">{item.label}</div>
                  <p className="text-[17px] text-[var(--muted)] leading-[1.75] font-light opacity-60">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[var(--label)] mb-4">PRINCIPLES</div>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-14">How We<br />Operate</h2>
          <div className="grid grid-cols-2 gap-0 bg-[var(--border)]">
            {COMPANY.values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.08}>
                <div className="bg-[var(--bg)] p-8 hover:bg-[var(--surface)] transition-all duration-300 cursor-default">
                  <div className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <div className="text-[16px] font-bold text-white mb-3">{val.title}</div>
                  <p className="text-[14px] text-[var(--dim)] leading-[1.85] opacity-70">{val.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[var(--label)] mb-4">TECHNOLOGY</div>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-14">Our<br />Technology Stack</h2>
          <div className="grid grid-cols-5 gap-10">
            {STACK_GROUPS.map((group, gi) => (
              <AnimatedSection key={group.title} delay={gi * 0.08}>
                <div>
                  <div className="font-mono text-[9px] text-[var(--label)] tracking-[3px] mb-4 pb-3 border-b border-[var(--border)]">
                    {group.title}
                  </div>
                  <div className="divide-y divide-[var(--border)]">
                    {group.items.map(item => (
                      <div key={item} className="py-2 text-[12px] text-[var(--dim)] hover:text-white transition-colors cursor-default opacity-70">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-12 py-24 text-center">
        <div className="max-w-[560px] mx-auto">
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-[-2px] leading-[1.05] mb-6">Work with us</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-bold text-[13px] px-10 py-4 hover:bg-[rgba(255,255,255,0.85)] transition-colors no-underline">
              Schedule a Discovery Call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
