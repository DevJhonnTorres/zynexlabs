import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PROJECTS, APPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Projects — Zynex Labs',
  description: 'Selected work: on-chain escrow, Web3 wallets, NFT auctions and municipal crypto payments, built and shipped by Zynex Labs.',
}

const smallLabel = 'mb-3 text-[12px] uppercase tracking-[0.25em] text-[var(--label)]'

export default function ProjectsPage() {
  const stats = [
    { value: String(PROJECTS.length), label: 'Projects delivered' },
    { value: '2024', label: 'Year founded' },
    { value: String(APPS.length), label: 'Live apps' },
    { value: '4', label: 'Industry verticals' },
  ]

  return (
    <>
      <PageHeader
        number="02"
        section="Projects"
        title="Selected"
        titleItalic="work."
        subtitle="A curated selection of products, platforms, and protocols we have engineered and shipped to production."
      />

      <section className="border-b border-[var(--line)]">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-9 md:px-8 ${i % 2 === 1 ? 'border-l border-[var(--line)]' : ''} ${
                i >= 2 ? 'border-t border-[var(--line)] md:border-t-0' : ''
              } ${i > 0 ? 'md:border-l md:border-[var(--line)]' : ''}`}
            >
              <dd className="mb-2 font-display text-[clamp(36px,4vw,52px)] font-medium leading-none tracking-[-0.03em] text-[var(--ink)]">
                {stat.value}
              </dd>
              <dt className="text-[12px] uppercase tracking-[0.2em] text-[var(--label)]">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {PROJECTS.map((p, i) => (
        <section
          key={p.hash}
          className={`border-b border-[var(--line)] px-5 py-14 md:px-12 md:py-20 ${i % 2 === 1 ? 'bg-[var(--surface)]' : ''}`}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <AnimatedSection direction="left">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[var(--ink)]">
                    {String(i + 1).padStart(2, '0')} · {p.vertical}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] text-[var(--label)]">{p.year}</span>
                    <Badge tone={p.status === 'LIVE' ? 'live' : 'neutral'}>{p.status}</Badge>
                  </div>
                </div>
                <h2 className="mb-3 font-display text-[clamp(32px,4vw,48px)] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
                  {p.title}
                </h2>
                <p className="mb-5 text-[18px] text-[var(--ink)]">{p.subtitle}</p>
                <p className="mb-8 text-[16px] leading-[1.8] text-[var(--muted)]">{p.description}</p>
                <div className={smallLabel}>Technologies</div>
                <div className="mb-8 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-medium text-[var(--blue)] no-underline underline-offset-4 hover:text-[var(--ink)] hover:underline"
                  >
                    {p.urlLabel ?? 'Visit'} ↗
                  </a>
                )}
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="border border-[var(--line)] bg-white">
                  <div className="border-b border-[var(--line)] p-6 md:p-8">
                    <div className={smallLabel}>The challenge</div>
                    <p className="text-[16px] leading-[1.8] text-[var(--muted)]">{p.challenge}</p>
                  </div>
                  <div className="border-l-2 border-l-[var(--ink)] p-6 md:p-8">
                    <div className="mb-3 text-[12px] uppercase tracking-[0.25em] text-[var(--ink)]">The outcome</div>
                    <p className="break-words text-[16px] leading-[1.8] text-[var(--ink)]">{p.outcome}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-20 text-white md:px-12 md:py-28">
        <div className="bg-grid-inverse pointer-events-none absolute inset-0" aria-hidden="true" />
        <AnimatedSection>
          <div className="relative mx-auto max-w-[1200px] text-center">
            <h2 className="mb-8 font-display text-[clamp(40px,6vw,80px)] font-medium leading-[1] tracking-[-0.045em]">
              Have a project <em>in mind?</em>
            </h2>
            <Button href="/contact" size="lg" variant="inverse">
              Start a conversation
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
