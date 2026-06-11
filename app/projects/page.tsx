import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { PROJECTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Projects — Zynex Labs',
  description: 'Selected work: enterprise AI platforms, Web3 payment protocols, observability systems, and regulatory automation engines.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        section="02 · PROJECTS"
        title="Selected Work"
        subtitle="A curated selection of products, platforms, and protocols we have engineered and shipped to production."
      />

      {/* Stats bar */}
      <section className="border-b border-[var(--border)] px-12 py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {[
              { value: '4',    label: 'Projects Delivered' },
              { value: '2024', label: 'Year Founded' },
              { value: '100%', label: 'Production Status' },
              { value: '4',    label: 'Industry Verticals' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-[clamp(32px,3.5vw,48px)] font-black tracking-[-2px] text-white leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-[9px] text-[var(--dim)] tracking-[3px] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {PROJECTS.map((p, i) => (
        <section
          key={p.hash}
          className={`border-b border-[var(--border)] px-12 py-20 ${
            i % 2 === 1 ? 'bg-[var(--surface)]' : ''
          }`}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 gap-16 items-start">
              <AnimatedSection direction="left">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[8px] tracking-[2px] text-[var(--label)] uppercase">{p.vertical}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[8px] text-[var(--dim)]">{p.year}</span>
                    <span className="font-mono text-[8px] border border-[var(--border)] text-[var(--label)] px-2 py-0.5">
                      {p.status}
                    </span>
                  </div>
                </div>
                <h2 className="text-[clamp(24px,2.5vw,34px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-3">
                  {p.title}
                </h2>
                <p className="text-[14px] text-[var(--muted)] mb-6 opacity-50">{p.subtitle}</p>
                <p className="text-[14px] text-[var(--dim)] leading-[1.9] mb-8 opacity-70">{p.description}</p>
                <div>
                  <div className="font-mono text-[9px] tracking-[2px] text-[var(--dim)] mb-3 uppercase">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="font-mono text-[9px] text-[var(--dim)] border border-[var(--border)] px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="space-y-4">
                  <div className="border border-[var(--border)] p-7">
                    <div className="font-mono text-[9px] tracking-[2px] text-[var(--dim)] mb-4 uppercase">The Challenge</div>
                    <p className="text-[14px] text-[var(--dim)] leading-[1.9] opacity-70">{p.challenge}</p>
                  </div>
                  <div className="border border-[rgba(255,255,255,0.12)] p-7 bg-[var(--surface)]">
                    <div className="font-mono text-[9px] tracking-[2px] text-[var(--label)] mb-4 uppercase">The Outcome</div>
                    <p className="text-[14px] text-[var(--dim)] leading-[1.9] opacity-70">{p.outcome}</p>
                  </div>
                  <div className="font-mono text-[9px] text-[var(--dim)] tracking-[2px]">DELIVERED {p.year}</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <section className="px-12 py-24 text-center">
        <div className="max-w-[560px] mx-auto">
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-[-2px] leading-[1.05] mb-6">
              Have a project in mind?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-bold text-[13px] px-10 py-4 hover:bg-[rgba(255,255,255,0.85)] transition-colors no-underline"
            >
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
