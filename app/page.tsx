import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Hero } from '@/components/sections/Hero'
import { SERVICES, PROJECTS } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services overview */}
      <section className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.015)] px-12 py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">01 · SERVICES</div>
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
              What We<br />Build
            </h2>
            <Link
              href="/services"
              className="text-[13px] text-[#444] hover:text-[#FF6A00] transition-colors duration-200 no-underline"
            >
              All services →
            </Link>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.slug} delay={i * 0.07}>
                <Link href={`/services#${svc.slug}`} className="no-underline block">
                  <div className="border border-[rgba(255,255,255,0.07)] p-6 h-full hover:border-[rgba(255,106,0,0.28)] hover:bg-[rgba(255,255,255,0.02)] transition-all duration-300 cursor-pointer group">
                    <div className="font-mono text-[9px] text-[#2a2a2a] tracking-[2px] mb-4">{svc.num}</div>
                    <div className="text-[14px] font-bold text-white mb-3 group-hover:text-[#FF6A00] transition-colors duration-200 leading-[1.2]">
                      {svc.title}
                    </div>
                    <div className="text-[11px] text-[#444] leading-[1.65]">{svc.tagline}</div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects overview — 2 featured */}
      <section className="border-b border-[rgba(255,255,255,0.07)] px-12 py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">02 · PROJECTS</div>
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
              Selected<br />Work
            </h2>
            <Link
              href="/projects"
              className="text-[13px] text-[#444] hover:text-[#FF6A00] transition-colors duration-200 no-underline"
            >
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {PROJECTS.slice(0, 2).map((p, i) => (
              <AnimatedSection key={p.hash} delay={i * 0.1}>
                <Link href="/projects" className="no-underline block">
                  <div className="border border-[rgba(255,255,255,0.07)] p-8 group hover:border-[rgba(255,106,0,0.28)] hover:bg-[rgba(255,255,255,0.02)] transition-all duration-300 cursor-pointer h-full">
                    <div className="flex items-center justify-between mb-7">
                      <span className="font-mono text-[9px] tracking-[2px] text-[rgba(255,106,0,0.5)] uppercase">{p.vertical}</span>
                      <span className="font-mono text-[9px] text-[#2a2a2a]">{p.year}</span>
                    </div>
                    <h3 className="text-[20px] font-bold text-white mb-2 leading-[1.2] group-hover:text-[#FF6A00] transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-[13px] text-[rgba(255,106,0,0.6)] mb-4">{p.subtitle}</p>
                    <p className="text-[13px] text-[#555] leading-[1.75] mb-6">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.slice(0, 4).map(t => (
                        <span key={t} className="font-mono text-[9px] text-[#444] border border-[rgba(255,255,255,0.07)] px-2.5 py-1">
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

      {/* CTA */}
      <section className="px-12 py-32 text-center">
        <div className="max-w-[640px] mx-auto">
          <AnimatedSection>
            <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-8 flex justify-center">
              {'// READY TO BUILD'}
            </div>
            <h2 className="text-[clamp(36px,5vw,68px)] font-black tracking-[-3px] leading-[1.0] mb-6">
              Transform your vision into{' '}
              <span className="text-[#FF6A00]">digital infrastructure</span>
            </h2>
            <p className="text-[16px] text-[#555] leading-[1.75] mb-10">
              Free 30-minute discovery call. We understand your challenge, share our approach, and tell you honestly whether we are the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6A00] text-black font-bold text-[14px] px-12 py-4 hover:bg-[#ff7c1a] transition-colors duration-200 no-underline"
            >
              Schedule a Free Discovery Call
            </Link>
            <div className="mt-5 font-mono text-[10px] text-[#2a2a2a] tracking-[2px]">
              CALENDLY · FREE 30-MIN · NO COMMITMENT
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
