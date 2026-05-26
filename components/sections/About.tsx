import { AnimatedSection } from '@/components/ui/AnimatedSection'

const VALUE_CARDS = [
  { icon: '⚡', title: 'Innovation',  desc: 'Emerging tech and modern architecture.' },
  { icon: '📈', title: 'Scalability', desc: 'Infrastructure built for growth.' },
  { icon: '🔒', title: 'Security',    desc: 'Robust development and cybersecurity.' },
  { icon: '🤖', title: 'Automation',  desc: 'AI-powered intelligent processes.' },
]

export function About() {
  return (
    <section id="about" className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.015)] px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-4">00 · ABOUT</div>
        <div className="grid grid-cols-2 gap-20 items-start">
          <AnimatedSection direction="left">
            <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-6">
              We Are<br /><span className="text-[#FF6A00]">Zynex Labs</span>
            </h2>
            <div className="text-[15px] text-[#666] leading-[1.85] space-y-4">
              <p>Zynex Labs S.A.S. is an <strong className="text-[#aaa] font-medium">advanced technology infrastructure company</strong> specialized in AI, automation, Web3, and software development.</p>
              <p>We design scalable digital platforms, modern architectures, and intelligent systems — building solutions ready for the future, connecting Latin America with the global technology economy.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-3">
            {VALUE_CARDS.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div className="border border-[rgba(255,255,255,0.07)] p-5 hover:border-[rgba(255,106,0,0.22)] hover:bg-[rgba(255,255,255,0.02)] transition-all duration-300 cursor-default">
                  <div className="text-[20px] mb-3">{card.icon}</div>
                  <div className="text-[13px] font-bold text-[#ccc] mb-1.5">{card.title}</div>
                  <div className="text-[12px] text-[#444] leading-[1.6]">{card.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
