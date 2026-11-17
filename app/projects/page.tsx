import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PROJECTS, APPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Projects — Zynex Labs',
  description: 'Selected work: on-chain escrow, Web3 wallets, NFT auctions and municipal crypto payments, built and shipped by Zynex Labs.',
}

const smallLabel = 'mb-3 font-mono text-[12px] uppercase tracking-[2px] text-[var(--label)]'

export default function ProjectsPage() {
  const stats = [
    { value: String(PROJECTS.length), label: 'Projects Delivered' },
    { value: '2024', label: 'Year Founded' },
    { value: String(APPS.length), label: 'Live Apps' },
    { value: '4', label: 'Industry Verticals' },
  ]

  return (
    <>
      <PageHeader
        section="02 · PROJECTS"
        title="Selected Work"
        subtitle="A curated selection of products, platforms, and protocols we have engineered and shipped to production."
      />

      <section className="border-b border-[var(--border)] px-5 py-10 md:px-12 md:py-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map(stat => (
            <div key={stat.label}>
              <div className="mb-2 text-[clamp(32px,4vw,48px)] font-black leading-none tracking-[-1.5px] text-white">
                <span className="text-gradient-accent">{stat.value}</span>
              </div>
              <div className="font-mono text-[12px] uppercase tracking-[1.5px] text-[var(--label)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {PROJECTS.map((p, i) => (
        <section
          key={p.hash}
          className={`border-b border-[var(--border)] px-5 py-14 md:px-12 md:py-20 ${i % 2 === 1 ? 'bg-[var(--surface)]' : ''}`}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <AnimatedSection direction="left">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[12px] uppercase tracking-[1.5px] text-accent-2">{p.vertical}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] text-[var(--dim)]">{p.year}</span>
                    <Badge tone={p.status === 'LIVE' ? 'live' : 'accent'}>{p.status}</Badge>
                  </div>
                </div>
                <h2 className="mb-3 text-[clamp(26px,3vw,36px)] font-extrabold leading-[1.1] tracking-[-1px]">{p.title}</h2>
                <p className="mb-5 text-[16px] font-medium text-[var(--text)]">{p.subtitle}</p>
                <p className="mb-8 text-[15px] leading-[1.8] text-[var(--muted)]">{p.description}</p>
                <div className={smallLabel}>Technologies</div>
                <div className="mb-8 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                {p.url && (
                  <Button href={p.url} external variant="secondary">
                    {p.urlLabel ?? 'Visit'} ↗
                  </Button>
                )}
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="space-y-4">
                  <Card>
                    <div className={smallLabel}>The Challenge</div>
                    <p className="text-[15px] leading-[1.8] text-[var(--muted)]">{p.challenge}</p>
                  </Card>
                  <Card highlight>
                    <div className="mb-3 font-mono text-[12px] uppercase tracking-[2px] text-accent-2">The Outcome</div>
                    <p className="break-words text-[15px] leading-[1.8] text-[var(--text)]">{p.outcome}</p>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 py-16 md:px-12 md:py-24">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-elev)] px-6 py-14 text-center md:px-12">
          <div className="glow-orange pointer-events-none absolute inset-0" aria-hidden="true" />
          <AnimatedSection>
            <div className="relative">
              <h2 className="mb-8 text-[clamp(28px,4vw,44px)] font-black tracking-[-1.2px]">Have a project in mind?</h2>
              <Button href="/contact" size="lg">Start a conversation</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
