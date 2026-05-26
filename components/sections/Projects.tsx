import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { PROJECTS } from '@/lib/constants'

export function Projects() {
  return (
    <section id="projects" className="relative z-[5] px-12 py-24 border-b border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.012)]">
      <SectionEyebrow>{'// 03 · PROJECTS'}</SectionEyebrow>
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] mb-14">
        Selected <span className="text-[#FF6A00]">Work</span>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div
              className="bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] p-7 cursor-pointer transition-all duration-300 hover:border-[rgba(255,106,0,0.22)] hover:bg-[rgba(255,106,0,0.08)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}
            >
              <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF6A00] to-transparent" />
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[9px] text-[#FF6A00] tracking-[2px]">{p.vertical}</span>
                <span className="font-mono text-[8px] text-[rgba(255,106,0,0.25)] tracking-wide">{p.hash}</span>
              </div>
              <div className="text-[19px] font-extrabold text-white mb-2.5 tracking-[-0.5px]">{p.title}</div>
              <div className="text-[13px] text-[#888] leading-[1.7] mb-4">{p.description}</div>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map(t => (
                  <span key={t} className="font-mono text-[9px] text-[rgba(255,106,0,0.6)] tracking-wide border border-[rgba(255,106,0,0.22)] rounded-sm px-2.5 py-1 bg-[rgba(255,106,0,0.08)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
