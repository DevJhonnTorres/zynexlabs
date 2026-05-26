import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { METHODOLOGY_STEPS } from '@/lib/constants'

export function Methodology() {
  return (
    <section className="relative z-[5] px-12 py-24 border-b border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.012)]">
      <SectionEyebrow>{'// 05 · METHODOLOGY'}</SectionEyebrow>
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] mb-14">
        How We <span className="text-[#FF6A00]">Build</span>
      </h2>
      <div className="flex border border-[rgba(255,255,255,0.06)] rounded-[4px] overflow-hidden relative">
        <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#FF6A00] via-[rgba(255,106,0,0.2)] to-transparent pointer-events-none" />
        {METHODOLOGY_STEPS.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.1} direction="up">
            <div className="flex-1 px-6 py-7 border-r border-[rgba(255,255,255,0.04)] last:border-r-0 transition-colors hover:bg-[rgba(255,106,0,0.08)] cursor-default relative">
              <span className="absolute bottom-[-4px] left-7 w-2 h-2 bg-[#FF6A00] rounded-full shadow-[0_0_10px_#FF6A00]" />
              <div className="font-mono text-[9px] text-[rgba(255,106,0,0.3)] tracking-[2px] mb-2.5">{step.num}</div>
              <div className="font-mono text-[13px] font-extrabold text-[#ccc] tracking-wide mb-2">{step.title}</div>
              <div className="text-[11px] text-[#444] leading-[1.6]">{step.desc}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
