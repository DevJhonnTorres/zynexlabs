import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { METHODOLOGY_STEPS } from '@/lib/constants'

export function Methodology() {
  return (
    <section className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.015)] px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">04 · METHODOLOGY</div>
        <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-16">
          How We<br />Build
        </h2>

        <div className="grid grid-cols-5 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-[10px] left-0 right-0 h-px bg-[rgba(255,255,255,0.06)]" />

          {METHODOLOGY_STEPS.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1} direction="up">
              <div className="relative pt-8">
                <div className="absolute top-[6px] left-0 w-2 h-2 rounded-full bg-[#FF6A00] -translate-y-px shadow-[0_0_10px_rgba(255,106,0,0.7)]" />
                <div className="font-mono text-[9px] text-[rgba(255,106,0,0.35)] tracking-[2px] mb-2">{step.num}</div>
                <div className="text-[13px] font-bold text-[#ccc] mb-2">{step.title}</div>
                <div className="text-[11px] text-[#444] leading-[1.65]">{step.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
