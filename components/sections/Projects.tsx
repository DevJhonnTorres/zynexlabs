import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PROJECTS } from '@/lib/constants'

export function Projects() {
  return (
    <section id="projects" className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.015)] px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">02 · PROJECTS</div>
        <div className="flex items-end justify-between mb-14">
          <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
            Selected<br />Work
          </h2>
          <p className="text-[14px] text-[#444] max-w-[260px] text-right leading-[1.7]">
            Products and platforms we&apos;ve engineered from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {PROJECTS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="border border-[rgba(255,255,255,0.07)] p-8 group hover:border-[rgba(255,106,0,0.28)] hover:bg-[rgba(255,255,255,0.02)] transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-7">
                  <span className="font-mono text-[9px] tracking-[2px] text-[rgba(255,106,0,0.5)] uppercase">
                    {p.vertical}
                  </span>
                  <span className="font-mono text-[8px] text-[#2a2a2a]">{p.hash}</span>
                </div>
                <h3 className="text-[22px] font-bold text-white mb-3 leading-[1.2] group-hover:text-[#FF6A00] transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[#555] leading-[1.75] mb-6">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="font-mono text-[9px] text-[#444] border border-[rgba(255,255,255,0.07)] px-2.5 py-1 group-hover:border-[rgba(255,106,0,0.18)] group-hover:text-[#666] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
