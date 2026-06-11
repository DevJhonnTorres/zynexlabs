import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ScrollCanvas } from '@/components/canvas/ScrollCanvas'
import { SERVICES, PROJECTS } from '@/lib/constants'

export default function Home() {
  return (
    <>
      {/* Fixed 3D canvas + hero overlay — background of the entire page */}
      <ScrollCanvas />

      {/* Hero spacer — scroll room while fixed hero is visible */}
      <div style={{ height: '100vh', position: 'relative', zIndex: 3 }} />

      {/* ── Services overview ── */}
      <section className="px-12 py-24" style={{ background: 'var(--bg)', position: 'relative', zIndex: 3 }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[4px] text-[var(--label)] mb-4">01 · SERVICES</div>
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
              What We<br />Build
            </h2>
            <Link
              href="/services"
              className="text-[12px] text-[var(--dim)] hover:text-white transition-colors duration-200 no-underline"
            >
              All services →
            </Link>
          </div>

          {/* 5-column grid with 1px separators */}
          <div className="grid grid-cols-5 gap-0 bg-[var(--border)]">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.slug} delay={i * 0.07}>
                <Link href={`/services#${svc.slug}`} className="no-underline block">
                  <div className="bg-[var(--bg)] p-6 h-full hover:bg-[var(--surface)] transition-colors duration-200 group">
                    <div className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] mb-4">{svc.num}</div>
                    <div className="text-[13px] font-bold text-white mb-3 leading-[1.2] group-hover:text-[var(--muted)] transition-colors duration-200">
                      {svc.title}
                    </div>
                    <div className="text-[11px] text-[var(--dim)] leading-[1.65] opacity-70">{svc.tagline}</div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects overview ── */}
      <section className="px-12 py-24" style={{ background: 'var(--bg)', position: 'relative', zIndex: 3 }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[4px] text-[var(--label)] mb-4">02 · PROJECTS</div>
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
              Selected<br />Work
            </h2>
            <Link
              href="/projects"
              className="text-[12px] text-[var(--dim)] hover:text-white transition-colors duration-200 no-underline"
            >
              All projects →
            </Link>
          </div>

          {/* 2-column grid with 1px separators */}
          <div className="grid grid-cols-2 gap-0 bg-[var(--border)]">
            {PROJECTS.slice(0, 2).map((p, i) => (
              <AnimatedSection key={p.hash} delay={i * 0.1}>
                <Link href="/projects" className="no-underline block">
                  <div className="bg-[var(--bg)] p-8 h-full hover:bg-[var(--surface)] transition-colors duration-200 group">
                    <div className="flex items-center justify-between mb-7">
                      <span className="font-mono text-[8px] tracking-[2px] text-[var(--label)] uppercase">{p.vertical}</span>
                      <span className="font-mono text-[8px] text-[var(--dim)]">{p.year}</span>
                    </div>
                    <h3 className="text-[18px] font-bold text-white mb-2 leading-[1.2] group-hover:text-[var(--muted)] transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-[12px] text-[var(--label)] mb-4">{p.subtitle}</p>
                    <p className="text-[13px] text-[var(--dim)] leading-[1.75] mb-6 opacity-70">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.slice(0, 4).map(t => (
                        <span
                          key={t}
                          className="font-mono text-[8px] text-[var(--dim)] border border-[var(--border)] px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-12 py-32 text-center" style={{ background: 'var(--bg)', position: 'relative', zIndex: 3 }}>
        <div className="max-w-[640px] mx-auto">
          <AnimatedSection>
            <div className="font-mono text-[9px] tracking-[4px] text-[var(--label)] mb-8 flex justify-center">
              {'// READY TO BUILD'}
            </div>
            <h2 className="text-[clamp(36px,5vw,68px)] font-black tracking-[-3px] leading-[1.0] mb-6">
              Transform your vision into{' '}
              <span className="text-[var(--dim)]">digital infrastructure</span>
            </h2>
            <p className="text-[16px] text-[var(--muted)] leading-[1.75] mb-10 opacity-50">
              Free 30-minute discovery call. We understand your challenge and tell you honestly whether we are the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-bold text-[13px] tracking-[1px] px-12 py-4 hover:bg-[rgba(255,255,255,0.85)] transition-colors duration-200 no-underline"
            >
              Schedule a Free Discovery Call
            </Link>
            <div className="mt-5 font-mono text-[9px] text-[var(--dim)] tracking-[2px]">
              CALENDLY · FREE 30-MIN · NO COMMITMENT
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
