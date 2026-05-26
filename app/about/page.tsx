import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { COMPANY, STACK_GROUPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About — Zynex Labs',
  description: 'Zynex Labs S.A.S. — advanced technology infrastructure company founded in Colombia in 2024. AI, automation, Web3, and software for next-generation companies.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        section="03 · ABOUT"
        title="About Zynex Labs"
        subtitle={`Advanced technology infrastructure company, founded in Colombia in ${COMPANY.founded}. We build the systems that next-generation companies run on.`}
      />

      {/* Company story */}
      <section className="border-b border-[rgba(255,255,255,0.07)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[1fr_1.4fr] gap-20 items-start">
            <AnimatedSection direction="left">
              <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">THE COMPANY</div>
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-4">
                Who We Are
              </h2>
              <div className="space-y-1 mt-8">
                {[
                  ['Legal name', COMPANY.name],
                  ['Founded', String(COMPANY.founded)],
                  ['Location', COMPANY.location],
                  ['Contact', COMPANY.email],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline gap-4 py-3 border-b border-[rgba(255,255,255,0.05)]">
                    <span className="font-mono text-[9px] text-[#333] tracking-[2px] w-24 shrink-0 uppercase">{label}</span>
                    <span className="text-[13px] text-[#666]">{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-5 text-[15px] text-[#555] leading-[1.9]">
                <p>
                  Zynex Labs S.A.S. was founded in {COMPANY.founded} in Colombia to address a clear gap in the Latin American technology market: the absence of a firm that combines deep technical expertise with international delivery standards.
                </p>
                <p>
                  We specialize in four interconnected disciplines — artificial intelligence, software engineering, blockchain infrastructure, and cloud operations — because the most valuable systems at the frontier of technology require expertise across all four. A machine learning model needs an engineering team that can ship it. A Web3 protocol needs a team that can operate it. We are that team.
                </p>
                <p>
                  Our model is senior-led and small by design. We do not operate with a layer of project managers between the client and the engineers doing the work. Every engagement is staffed by people who have built production systems in the relevant domains — not resources allocated from a bench.
                </p>
                <p>
                  We serve clients across Latin America, North America, and Europe, operating remotely by default with the processes and communication discipline that distributed work demands.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.015)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="border border-[rgba(255,255,255,0.07)] p-10 h-full">
                <div className="font-mono text-[9px] tracking-[3px] text-[rgba(255,106,0,0.5)] mb-5 uppercase">Mission</div>
                <p className="text-[18px] text-[#ccc] leading-[1.75] font-light">{COMPANY.mission}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="border border-[rgba(255,255,255,0.07)] p-10 h-full">
                <div className="font-mono text-[9px] tracking-[3px] text-[rgba(255,106,0,0.5)] mb-5 uppercase">Vision</div>
                <p className="text-[18px] text-[#ccc] leading-[1.75] font-light">{COMPANY.vision}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-[rgba(255,255,255,0.07)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">PRINCIPLES</div>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-14">
            How We<br />Operate
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {COMPANY.values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.08}>
                <div className="border border-[rgba(255,255,255,0.07)] p-8 hover:border-[rgba(255,106,0,0.2)] hover:bg-[rgba(255,255,255,0.02)] transition-all duration-300 cursor-default">
                  <div className="font-mono text-[9px] text-[#2a2a2a] tracking-[2px] mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-[16px] font-bold text-white mb-3">{val.title}</div>
                  <p className="text-[14px] text-[#555] leading-[1.85]">{val.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.015)] px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">TECHNOLOGY</div>
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
              Our<br />Technology Stack
            </h2>
            <p className="text-[14px] text-[#444] max-w-[280px] text-right leading-[1.7]">
              35+ technologies across five core engineering domains.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-10">
            {STACK_GROUPS.map((group, gi) => (
              <AnimatedSection key={group.title} delay={gi * 0.08}>
                <div>
                  <div className="font-mono text-[9px] text-[#FF6A00] tracking-[3px] mb-4 pb-3 border-b border-[rgba(255,106,0,0.12)]">
                    {group.title}
                  </div>
                  <div className="divide-y divide-[rgba(255,255,255,0.04)]">
                    {group.items.map(item => (
                      <div
                        key={item}
                        className="py-2 text-[12px] text-[#444] hover:text-[#FF6A00] transition-colors duration-200 cursor-default"
                      >
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

      {/* Legal */}
      <section className="border-b border-[rgba(255,255,255,0.07)] px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">LEGAL STRUCTURE</div>
          <div className="grid grid-cols-[1fr_2fr] gap-20">
            <div>
              <h2 className="text-[20px] font-extrabold tracking-[-0.5px] mb-3">Zynex Labs S.A.S.</h2>
              <p className="text-[13px] text-[#444] leading-[1.75]">
                Registered as a Simplified Shares Corporation (S.A.S.) under Colombian commercial law. Our legal object covers the full spectrum of technology services we provide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {COMPANY.legal.map(entry => (
                <div
                  key={entry}
                  className="border border-[rgba(255,255,255,0.07)] p-4 font-mono text-[10px] text-[#444] leading-[1.65]"
                >
                  {entry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 py-24 text-center">
        <div className="max-w-[560px] mx-auto">
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-[-2px] leading-[1.05] mb-6">
              Work with us
            </h2>
            <p className="text-[15px] text-[#555] leading-[1.75] mb-8">
              We are selective about the projects we take on. If what we build and how we operate sounds like what your company needs, let us talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6A00] text-black font-bold text-[13px] px-10 py-4 hover:bg-[#ff7c1a] transition-colors duration-200 no-underline"
            >
              Schedule a Discovery Call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
