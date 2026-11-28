import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { COMPANY, FOUNDER, STACK_GROUPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' },
  description: 'Zynex Labs S.A.S. — advanced technology infrastructure company founded in Colombia in 2024.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        number="03"
        section="About"
        title="About"
        titleItalic="Zynex Labs."
        subtitle={`Advanced technology infrastructure company, founded in Colombia in ${COMPANY.founded}.`}
      />

      <section className="border-b border-[var(--line)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <AnimatedSection direction="left">
              <SectionHeading number="01" eyebrow="The company" title="Who we" titleItalic="are." className="!mb-8" />
              <div>
                {[
                  ['Legal name', COMPANY.name],
                  ['Founded', String(COMPANY.founded)],
                  ['Location', COMPANY.location],
                  ['Contact', COMPANY.email],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1 border-b border-[var(--line)] py-3 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="w-28 shrink-0 text-[12px] uppercase tracking-[0.2em] text-[var(--label)]">{label}</span>
                    <span className="break-words text-[15px] text-[var(--text)]">{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-5 text-[17px] leading-[1.85] text-[var(--muted)]">
                <p>Zynex Labs S.A.S. was founded in {COMPANY.founded} in Colombia to address a clear gap in the Latin American technology market: the absence of a firm that combines deep technical expertise with international delivery standards.</p>
                <p>We specialize in four interconnected disciplines — artificial intelligence, software engineering, blockchain infrastructure, and cloud operations — because the most valuable systems at the frontier of technology require expertise across all four.</p>
                <p>Our model is senior-led and small by design. We do not operate with a layer of project managers between the client and the engineers doing the work.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="founder" className="border-b border-[var(--line)] bg-[var(--surface)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading number="02" eyebrow="The founder" title="Meet" titleItalic={`${FOUNDER.name}.`} />
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <AnimatedSection direction="left">
              <Card highlight className="md:p-9">
                <div className="mb-6 flex h-20 w-20 items-center justify-center bg-[var(--ink)] font-display text-[30px] font-medium tracking-[-0.03em] text-white" aria-hidden="true">
                  JT
                </div>
                <div className="font-display text-[30px] font-medium leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">{FOUNDER.name}</div>
                <div className="mt-2 text-[15px] text-[var(--muted)]">{FOUNDER.role} · {FOUNDER.location}</div>
                <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.15em] text-[var(--label)]">{FOUNDER.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {FOUNDER.focus.map(f => (
                    <span key={f} className="border border-[var(--line)] bg-white px-3 py-1.5 text-[13px] text-[var(--text)]">{f}</span>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-5 text-[17px] leading-[1.85] text-[var(--muted)]">
                {FOUNDER.bio.map(p => <p key={p}>{p}</p>)}
              </div>
              <div className="mt-8 grid grid-cols-2 border-l border-t border-[var(--line)] sm:grid-cols-4">
                {FOUNDER.highlights.map(h => (
                  <div key={h.label} className="border-b border-r border-[var(--line)] bg-white p-5">
                    <div className="font-display text-[26px] font-medium tracking-[-0.03em] text-[var(--ink)]">{h.value}</div>
                    <div className="mt-1 text-[13px] leading-[1.5] text-[var(--muted)]">{h.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-14">
            <div className="mb-4 border-b border-[var(--ink)] pb-3 text-[12px] uppercase tracking-[0.25em] text-[var(--ink)]">Get in touch with Jhonn</div>
            <div className="grid grid-cols-1 border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'Email', value: FOUNDER.email, href: `mailto:${FOUNDER.email}` },
                { label: 'WhatsApp / Phone', value: FOUNDER.phone, href: FOUNDER.whatsapp },
                ...FOUNDER.socials.map(s => ({ label: s.label, value: s.handle, href: s.href })),
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group block border-b border-r border-[var(--line)] bg-white p-6 no-underline transition-colors hover:bg-[var(--ink)]"
                >
                  <div className="mb-2 text-[12px] uppercase tracking-[0.2em] text-[var(--label)] group-hover:text-white/60">{c.label}</div>
                  <div className="break-all font-display text-[18px] tracking-[-0.01em] text-[var(--ink)] group-hover:text-white">{c.value} <span aria-hidden="true">↗</span></div>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-[var(--line)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2">
          {[
            { label: 'Mission', text: COMPANY.mission },
            { label: 'Vision', text: COMPANY.vision },
          ].map((item, i) => (
            <AnimatedSection key={item.label} className="h-full">
              <Card highlight={i === 0} className="h-full md:p-9">
                <div className="mb-5 text-[12px] uppercase tracking-[0.25em] text-[var(--label)]">{item.label}</div>
                <p className="font-display text-[22px] leading-[1.5] tracking-[-0.01em] text-[var(--ink)]">{item.text}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--line)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading number="03" eyebrow="Principles" title="How we" titleItalic="operate." />
          <div className="grid grid-cols-1 border-l border-t border-[var(--line)] md:grid-cols-2">
            {COMPANY.values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.06} className="h-full">
                <div className="h-full border-b border-r border-[var(--line)] bg-white p-7 transition-colors hover:bg-[var(--surface)] md:p-9">
                  <div className="mb-6 font-mono text-[12px] tracking-[0.1em] text-[var(--label)]">{String(i + 1).padStart(2, '0')}</div>
                  <div className="mb-3 font-display text-[24px] font-medium tracking-[-0.02em] text-[var(--ink)]">{val.title}</div>
                  <p className="text-[16px] leading-[1.8] text-[var(--muted)]">{val.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading number="04" eyebrow="Technology" title="Our" titleItalic="stack." />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
            {STACK_GROUPS.map((group, gi) => (
              <AnimatedSection key={group.title} delay={gi * 0.06}>
                <div className="mb-4 border-b border-[var(--ink)] pb-3 text-[12px] uppercase tracking-[0.25em] text-[var(--ink)]">
                  {group.title}
                </div>
                <div className="divide-y divide-[var(--line)]">
                  {group.items.map(item => (
                    <div key={item} className="cursor-default py-2.5 text-[15px] text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                      {item}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-20 text-white md:px-12 md:py-28">
        <div className="bg-grid-inverse pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px] text-center">
          <AnimatedSection>
            <div className="relative">
              <h2 className="mb-8 font-display text-[clamp(40px,6vw,80px)] font-medium leading-[1] tracking-[-0.045em]">Work <em>with us.</em></h2>
              <Button href="/contact" size="lg" variant="inverse">Schedule a discovery call</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
