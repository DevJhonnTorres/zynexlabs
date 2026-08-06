import { AnimatedSection } from '@/components/ui/AnimatedSection'

const VALUE_CARDS = [
  { title: 'Innovation',  desc: 'Emerging tech and modern architecture.' },
  { title: 'Scalability', desc: 'Infrastructure built for growth.' },
  { title: 'Security',    desc: 'Robust development and cybersecurity.' },
  { title: 'Automation',  desc: 'AI-powered intelligent processes.' },
]

export function About() {
  return (
    <section id="about" className="border-b border-[var(--border)] px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[4px] text-[var(--label)] mb-4">00 · ABOUT</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          <AnimatedSection direction="left">
            <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-6">
              We Are<br />Zynex Labs
            </h2>
            <div className="text-[15px] text-[var(--muted)] leading-[1.85] space-y-4 opacity-60">
              <p>
                Zynex Labs S.A.S. is an <strong className="text-white opacity-100 font-medium">advanced technology infrastructure company</strong> specialized in AI, automation, Web3, and software development.
              </p>
              <p>
                We design scalable digital platforms, modern architectures, and intelligent systems — building solutions ready for the future, connecting Latin America with the global technology economy.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 bg-[var(--border)]">
            {VALUE_CARDS.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div className="bg-[var(--bg)] p-5 hover:bg-[var(--surface)] transition-all duration-300 cursor-default">
                  <div className="font-mono text-[9px] text-[var(--dim)] tracking-[2px] mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-[13px] font-bold text-white mb-1.5">{card.title}</div>
                  <div className="text-[12px] text-[var(--dim)] leading-[1.6] opacity-70">{card.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
