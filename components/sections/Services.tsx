import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="border-b border-[var(--border)] px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[1fr_2fr] gap-20 items-start">
          <div className="sticky top-24">
            <div className="font-mono text-[10px] tracking-[4px] text-[var(--label)] mb-4">01 · SERVICES</div>
            <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-5">
              What We<br />Build
            </h2>
            <p className="text-[14px] text-[var(--muted)] leading-[1.75] opacity-50">
              Five specialized verticals covering the full spectrum of modern technology infrastructure.
            </p>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.num} delay={i * 0.06} direction="none">
                <div className="py-7 group flex items-start gap-6 cursor-default -mx-5 px-5 hover:bg-[var(--surface)] transition-colors duration-200">
                  <span className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] mt-1.5 shrink-0 w-14">
                    {svc.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-bold text-white mb-2 group-hover:text-[var(--muted)] transition-colors duration-200">
                      {svc.title}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {svc.items.map(item => (
                        <span key={item} className="text-[12px] text-[var(--dim)] opacity-70">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-[var(--dim)] group-hover:text-white transition-colors duration-200 text-[16px] shrink-0 mt-1">
                    →
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
