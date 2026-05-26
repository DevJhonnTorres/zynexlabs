import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { STACK_GROUPS } from '@/lib/constants'

export function Stack() {
  return (
    <section id="stack" className="relative z-[5] px-12 py-24 border-b border-[rgba(255,255,255,0.04)]">
      <SectionEyebrow>{'// 04 · TECH STACK'}</SectionEyebrow>
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] mb-14">
        Our <span className="text-[#FF6A00]">Arsenal</span>
      </h2>
      <div className="grid grid-cols-5 gap-8">
        {STACK_GROUPS.map((group, gi) => (
          <AnimatedSection key={group.title} delay={gi * 0.08}>
            <div className="font-mono text-[9px] text-[#FF6A00] tracking-[3px] mb-3.5 pb-2 border-b border-[rgba(255,106,0,0.22)]">
              {group.title}
            </div>
            {group.items.map(item => (
              <div
                key={item.name}
                className="flex items-center gap-2 bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] rounded-[4px] px-3 py-2.5 text-[11px] text-[#444] mb-1.5 cursor-default transition-all duration-200 hover:border-[rgba(255,106,0,0.22)] hover:text-[#FF6A00] hover:bg-[rgba(255,106,0,0.08)] hover:translate-x-1"
              >
                <span>{item.icon}</span><span>{item.name}</span>
              </div>
            ))}
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
