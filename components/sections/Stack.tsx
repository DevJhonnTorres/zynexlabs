import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { STACK_GROUPS } from '@/lib/constants'

export function Stack() {
  return (
    <section id="stack" className="border-b border-[rgba(255,255,255,0.07)] px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">03 · TECH STACK</div>
        <div className="flex items-end justify-between mb-14">
          <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
            Our<br />Arsenal
          </h2>
          <p className="text-[14px] text-[#444] max-w-[260px] text-right leading-[1.7]">
            30+ technologies across five core domains.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-10">
          {STACK_GROUPS.map((group, gi) => (
            <AnimatedSection key={group.title} delay={gi * 0.08}>
              <div>
                <div className="font-mono text-[9px] text-[#FF6A00] tracking-[3px] mb-4 pb-3 border-b border-[rgba(255,106,0,0.12)]">
                  {group.title}
                </div>
                <div className="space-y-0 divide-y divide-[rgba(255,255,255,0.04)]">
                  {group.items.map(item => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2.5 py-2 text-[12px] text-[#444] hover:text-[#FF6A00] transition-colors duration-200 cursor-default"
                    >
                      <span className="text-[13px]">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
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
