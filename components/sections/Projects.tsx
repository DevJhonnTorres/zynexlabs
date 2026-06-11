import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PROJECTS } from '@/lib/constants'

export function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--border)] px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[4px] text-[var(--label)] mb-4">02 · PROJECTS</div>
        <div className="flex items-end justify-between mb-14">
          <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
            Selected<br />Work
          </h2>
          <p className="text-[14px] text-[var(--dim)] max-w-[260px] text-right leading-[1.7] opacity-60">
            Products and platforms we&apos;ve engineered and shipped to production.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-0 bg-[var(--border)]">
          {PROJECTS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="bg-[var(--bg)] p-8 h-full group hover:bg-[var(--surface)] transition-colors duration-200 cursor-default">
                <div className="flex items-center justify-between mb-7">
                  <span className="font-mono text-[8px] tracking-[2px] text-[var(--label)] uppercase">
                    {p.vertical}
                  </span>
                  <span className="font-mono text-[8px] text-[var(--dim)]">{p.year}</span>
                </div>
                <h3 className="text-[20px] font-bold text-white mb-3 leading-[1.2] group-hover:text-[var(--muted)] transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[var(--dim)] leading-[1.75] mb-6 opacity-60">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="font-mono text-[8px] text-[var(--dim)] border border-[var(--border)] px-2.5 py-1"
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
