import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { STACK_GROUPS } from '@/lib/constants'

export function Stack() {
  return (
    <section id="stack" className="border-b border-[var(--border)] px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[4px] text-[var(--label)] mb-4">03 · TECH STACK</div>
        <div className="flex items-end justify-between mb-14">
          <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
            Our<br />Arsenal
          </h2>
          <p className="text-[14px] text-[var(--dim)] max-w-[260px] text-right leading-[1.7] opacity-60">
            35+ technologies across five core engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {STACK_GROUPS.map((group, gi) => (
            <AnimatedSection key={group.title} delay={gi * 0.08}>
              <div>
                <div className="font-mono text-[9px] text-[var(--label)] tracking-[3px] mb-4 pb-3 border-b border-[var(--border)]">
                  {group.title}
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {group.items.map(item => (
                    <div
                      key={item}
                      className="py-2 text-[12px] text-[var(--dim)] hover:text-white transition-colors duration-200 cursor-default opacity-70"
                    >
                      {item}
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
