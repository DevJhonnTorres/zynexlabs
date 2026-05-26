import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="border-b border-[rgba(255,255,255,0.07)] px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[1fr_2fr] gap-20 items-start">
          {/* Left: sticky header */}
          <div className="sticky top-24">
            <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">01 · SERVICES</div>
            <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-5">
              What We<br />Build
            </h2>
            <p className="text-[14px] text-[#555] leading-[1.75]">
              Five specialized verticals covering the full spectrum of modern technology infrastructure.
            </p>
          </div>

          {/* Right: list */}
          <div className="divide-y divide-[rgba(255,255,255,0.06)]">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.num} delay={i * 0.06} direction="none">
                <div className="py-7 group flex items-start gap-6 cursor-default -mx-5 px-5 hover:bg-[rgba(255,255,255,0.018)] transition-colors duration-200">
                  <span className="font-mono text-[9px] text-[#2a2a2a] tracking-[2px] mt-1.5 shrink-0 w-14">{svc.num}</span>
                  <span className="text-[22px] shrink-0">{svc.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-bold text-white mb-2 group-hover:text-[#FF6A00] transition-colors duration-200">
                      {svc.title}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {svc.items.map(item => (
                        <span key={item} className="text-[12px] text-[#444]">{item}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-[#2a2a2a] group-hover:text-[#FF6A00] transition-colors duration-200 text-[16px] shrink-0 mt-1">→</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
