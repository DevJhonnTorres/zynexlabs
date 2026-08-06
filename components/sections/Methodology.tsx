import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { METHODOLOGY_STEPS } from '@/lib/constants'

export function Methodology() {
  return (
    <section className="border-b border-[var(--border)] px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[4px] text-[var(--label)] mb-4">04 · METHODOLOGY</div>
        <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-16">
          How We<br />Build
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          <div className="absolute top-[10px] left-0 right-0 h-px bg-[var(--border)]" />

          {METHODOLOGY_STEPS.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1} direction="up">
              <div className="relative pt-8">
                <div className="absolute top-[6px] left-0 w-2 h-2 rounded-full bg-white -translate-y-px" />
                <div className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] mb-2">{step.num}</div>
                <div className="text-[13px] font-bold text-white mb-2">{step.title}</div>
                <div className="text-[11px] text-[var(--dim)] leading-[1.65] opacity-70">{step.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
