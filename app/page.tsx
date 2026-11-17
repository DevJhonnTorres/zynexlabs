import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ServiceIcon } from '@/components/ui/Icons'
import { AppCard } from '@/components/apps/AppCard'
import { SERVICES, PROJECTS, APPS, METHODOLOGY_STEPS, TECH_STRIP } from '@/lib/constants'

const firstSentence = (s: string) => {
  const m = s.match(/^.*?[.!?](\s|$)/)
  return (m ? m[0] : s).trim()
}

const sectionCls = 'relative px-5 py-20 md:px-12 md:py-28'
const eyebrowCls = 'text-[12px] uppercase tracking-[0.25em] text-[var(--label)]'

export default function Home() {
  const featured = APPS.filter(a => a.featured).slice(0, 6)

  const stats = [
    { value: '27+', label: 'Public repos' },
    { value: String(APPS.length), label: 'Live apps' },
    { value: String(SERVICES.length), label: 'Service lines' },
    { value: '24/7', label: 'Autonomous ops' },
  ]

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden border-b border-[var(--line)] px-5 py-20 md:px-12">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
          <div className={`mb-8 border border-[var(--line)] bg-white px-4 py-2 ${eyebrowCls}`}>
            Advanced technology infrastructure
          </div>
          <h1 className="mb-8 font-display text-[clamp(56px,9vw,128px)] font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink)]">
            Trust, <em>Engineered.</em>
          </h1>
          <p className="mb-10 max-w-[780px] text-[18px] leading-[1.65] text-[var(--muted)] md:text-[20px]">
            Zynex Labs builds AI systems, automation pipelines and Web3 protocols for companies that need infrastructure
            that lasts — monitored, reporting and deciding 24/7.
          </p>
          <div className="mb-16 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button href="/services" size="lg">
              Explore capabilities
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Schedule a call
            </Button>
          </div>

          <dl className="grid w-full max-w-[960px] grid-cols-2 border border-[var(--line)] bg-white md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-7 ${i % 2 === 1 ? 'border-l border-[var(--line)]' : ''} ${
                  i >= 2 ? 'border-t border-[var(--line)] md:border-t-0' : ''
                } ${i > 0 ? 'md:border-l' : ''} md:border-[var(--line)]`}
              >
                <dd className="font-display text-[44px] font-medium leading-none tracking-[-0.03em] text-[var(--ink)]">
                  {s.value}
                </dd>
                <dt className={`mt-3 ${eyebrowCls} !tracking-[0.2em]`}>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 2. TECH STRIP ── */}
      <section className="flex flex-col items-stretch border-b border-[var(--line)] bg-white md:flex-row" aria-label="Technology stack">
        <div className={`flex shrink-0 items-center border-b border-[var(--line)] px-5 py-4 md:border-b-0 md:border-r md:px-12 md:py-8 ${eyebrowCls}`}>
          Built with
        </div>
        <div
          className="flex-1 overflow-hidden py-5 md:py-8"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          }}
        >
          <div className="marquee-track flex">
            {[...TECH_STRIP, ...TECH_STRIP, ...TECH_STRIP, ...TECH_STRIP].map((t, i) => (
              <span key={`${t}-${i}`} className="flex items-center whitespace-nowrap font-display text-[22px] text-[var(--dim)]">
                <span className="px-6">{t}</span>
                <span className="text-[var(--line)]" aria-hidden="true">
                  ·
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ── */}
      <section className={`${sectionCls} border-b border-[var(--line)]`}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
              <SectionHeading
                className="!mb-0"
                number="01"
                eyebrow="Capabilities"
                title="One studio."
                titleItalic="Every surface."
              />
              <p className="text-[17px] leading-[1.7] text-[var(--muted)]">
                Five specialized service lines under one senior team. AI, software, blockchain, cloud and design are built
                together, so the systems we ship behave like one product instead of five hand-offs.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 border-l border-t border-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className={`group flex flex-col border-b border-r border-[var(--line)] bg-white p-8 no-underline transition-colors duration-300 hover:bg-[var(--ink)] md:p-10 ${
                    i === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="mb-10 flex items-start justify-between">
                    <span className="font-mono text-[13px] tracking-[0.1em] text-[var(--label)] transition-colors group-hover:text-white/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <ServiceIcon name={s.icon} className="h-8 w-8 text-[var(--ink)] transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 font-display text-[22px] font-medium tracking-[-0.02em] text-[var(--ink)] transition-colors group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mb-6 text-[16px] leading-[1.6] text-[var(--muted)] transition-colors group-hover:text-white/75">
                    {s.tagline}
                  </p>
                  <ul className="mb-8 space-y-2">
                    {s.items.slice(0, 3).map(item => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-[1.5] text-[var(--muted)] transition-colors group-hover:text-white/75"
                      >
                        <span className="mt-[9px] h-px w-3 shrink-0 bg-current" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto text-[15px] font-medium text-[var(--ink)] transition-colors group-hover:text-white">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. LIVE APPS ── */}
      <section className={`${sectionCls} border-b border-[var(--line)] bg-[var(--surface)]`}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <SectionHeading
              number="02"
              eyebrow="Production"
              title="Live"
              titleItalic="apps."
              subtitle="Products we built that are deployed and running today."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((app, i) => (
              <AnimatedSection key={app.slug} delay={(i % 3) * 0.08} className="h-full">
                <AppCard app={app} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/apps" variant="secondary" size="lg">
              View all {APPS.length} apps →
            </Button>
          </div>
        </div>
      </section>

      {/* ── 5. PROJECTS ── */}
      <section className={`${sectionCls} border-b border-[var(--line)]`}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <SectionHeading
              number="03"
              eyebrow="Selected work"
              title="Built to"
              titleItalic="run itself."
              linkHref="/projects"
              linkLabel="All projects →"
            />
          </AnimatedSection>
          <div className="border-t border-[var(--line)]">
            {PROJECTS.map((p, i) => (
              <AnimatedSection key={p.hash} delay={i * 0.05} direction="none">
                <div className="group grid grid-cols-1 gap-4 border-b border-[var(--line)] px-0 py-8 transition-colors duration-200 hover:bg-[var(--surface)] md:grid-cols-[100px_1.4fr_1fr_130px] md:items-center md:gap-8 md:px-6 md:py-9">
                  <span className="font-mono text-[13px] tracking-[0.1em] text-[var(--label)]">{p.year}</span>
                  <div>
                    <h3 className="mb-1 font-display text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
                      {p.title}
                    </h3>
                    <p className="text-[16px] text-[var(--muted)]">{p.subtitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map(t => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="md:text-right">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-[var(--blue)] no-underline hover:text-[var(--ink)]"
                      >
                        {p.urlLabel ?? 'Visit'} ↗
                      </a>
                    ) : (
                      <Link href="/projects" className="text-[15px] font-medium text-[var(--ink)] no-underline">
                        Details →
                      </Link>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ── */}
      <section className={`${sectionCls} border-b border-[var(--line)]`}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <SectionHeading number="04" eyebrow="Methodology" title="How we" titleItalic="work." />
          </AnimatedSection>
          <div className="grid grid-cols-1 border-l border-t border-[var(--line)] md:grid-cols-2 lg:grid-cols-5">
            {METHODOLOGY_STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.06} className="h-full">
                <div className="h-full border-b border-r border-[var(--line)] bg-white p-7 transition-colors hover:bg-[var(--surface)]">
                  <div className="mb-8 font-mono text-[12px] tracking-[0.1em] text-[var(--label)]">{step.num}</div>
                  <h3 className="mb-3 font-display text-[22px] font-medium tracking-[-0.02em] text-[var(--ink)]">{step.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-[var(--muted)]">{firstSentence(step.desc)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. QUOTE ── */}
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--surface)] px-5 py-24 md:px-12 md:py-36">
        <AnimatedSection>
          <div className="mx-auto max-w-[1000px] text-center">
            <p className="font-display text-[clamp(36px,6vw,80px)] font-medium leading-[1.02] tracking-[-0.04em] text-[var(--ink)]">
              We don&apos;t ship code <em>we&apos;re not proud of.</em>
            </p>
            <p className={`mt-8 font-mono !tracking-[0.15em] ${eyebrowCls}`}>— Zynex Labs principles</p>
          </div>
        </AnimatedSection>
      </section>

      {/* ── 8. CTA (inverted) ── */}
      <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-white md:px-12 md:py-36">
        <div className="bg-grid-inverse pointer-events-none absolute inset-0" aria-hidden="true" />
        <AnimatedSection>
          <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-white/60">
              <span className="font-mono tracking-[0.1em] text-white">05</span>
              <span className="h-px w-8 bg-white" aria-hidden="true" />
              Let&apos;s talk
            </div>
            <h2 className="mb-8 font-display text-[clamp(48px,8vw,112px)] font-medium leading-[0.98] tracking-[-0.045em]">
              Start <em>building.</em>
            </h2>
            <p className="mb-10 max-w-[640px] text-[18px] leading-[1.65] text-white/70 md:text-[20px]">
              Free 30-minute discovery call. We understand your challenge and tell you honestly whether we are the right fit.
            </p>
            <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
              <Button href="/contact" size="lg" variant="inverse">
                Book your slot
              </Button>
              <span className="text-[16px] text-white/70">
                or{' '}
                <Link href="/projects" className="font-medium text-white underline underline-offset-4 hover:text-white/80">
                  See verified work →
                </Link>
              </span>
            </div>
            <p className="font-mono text-[12px] tracking-[0.1em] text-white/50">
              30 minutes · no commitment · with the founding team
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
