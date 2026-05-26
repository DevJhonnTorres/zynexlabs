import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { PROJECTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Projects — Zynex Labs',
  description: 'Selected work: enterprise AI platforms, Web3 payment protocols, observability systems, and regulatory automation engines — all in production.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        section="02 · PROJECTS"
        title="Selected Work"
        subtitle="A curated selection of products, platforms, and protocols we have engineered and shipped to production. Each entry includes the challenge that defined the project and the measurable outcome it produced."
      />

      {/* Stats bar */}
      <section className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.015)] px-12 py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {[
              { value: '4', label: 'Projects Delivered' },
              { value: '2024', label: 'Year Founded' },
              { value: '100%', label: 'Production Status' },
              { value: '4', label: 'Industry Verticals' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-[clamp(32px,3.5vw,48px)] font-black tracking-[-2px] text-white leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-[#444] tracking-[3px] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed project sections */}
      {PROJECTS.map((p, i) => (
        <section
          key={p.hash}
          className={`border-b border-[rgba(255,255,255,0.07)] px-12 py-20 ${
            i % 2 === 1 ? 'bg-[rgba(255,255,255,0.015)]' : ''
          }`}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 gap-16 items-start">
              {/* Left: project info */}
              <AnimatedSection direction="left">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[9px] tracking-[2px] text-[rgba(255,106,0,0.5)] uppercase">{p.vertical}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-[#2a2a2a]">{p.hash}</span>
                    <span className="font-mono text-[8px] border border-[rgba(255,106,0,0.2)] text-[rgba(255,106,0,0.6)] px-2 py-0.5">
                      {p.status}
                    </span>
                  </div>
                </div>
                <h2 className="text-[clamp(24px,2.5vw,34px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-3">
                  {p.title}
                </h2>
                <p className="text-[14px] text-[#FF6A00] mb-6 font-medium">{p.subtitle}</p>
                <p className="text-[14px] text-[#555] leading-[1.9] mb-8">{p.description}</p>
                <div>
                  <div className="font-mono text-[9px] tracking-[2px] text-[#333] mb-3 uppercase">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-[#444] border border-[rgba(255,255,255,0.07)] px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Right: challenge + outcome */}
              <AnimatedSection direction="right">
                <div className="space-y-8">
                  <div className="border border-[rgba(255,255,255,0.07)] p-7">
                    <div className="font-mono text-[9px] tracking-[2px] text-[#333] mb-4 uppercase">The Challenge</div>
                    <p className="text-[14px] text-[#666] leading-[1.9]">{p.challenge}</p>
                  </div>
                  <div className="border border-[rgba(255,106,0,0.15)] p-7 bg-[rgba(255,106,0,0.02)]">
                    <div className="font-mono text-[9px] tracking-[2px] text-[rgba(255,106,0,0.5)] mb-4 uppercase">The Outcome</div>
                    <p className="text-[14px] text-[#666] leading-[1.9]">{p.outcome}</p>
                  </div>
                  <div className="font-mono text-[9px] text-[#2a2a2a] tracking-[2px]">
                    DELIVERED {p.year}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-12 py-24 text-center">
        <div className="max-w-[560px] mx-auto">
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-[-2px] leading-[1.05] mb-6">
              Have a project in mind?
            </h2>
            <p className="text-[15px] text-[#555] leading-[1.75] mb-8">
              Tell us what you are building. We will review it and respond within 24 hours with a candid assessment and proposed next steps.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6A00] text-black font-bold text-[13px] px-10 py-4 hover:bg-[#ff7c1a] transition-colors duration-200 no-underline"
            >
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
