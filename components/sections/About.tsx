import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

const VALUE_CARDS = [
  { icon: '⚡', title: 'Innovation',  desc: 'Emerging tech and modern architecture.' },
  { icon: '📈', title: 'Scalability', desc: 'Infrastructure built for growth.' },
  { icon: '🔒', title: 'Security',    desc: 'Robust development and cybersecurity.' },
  { icon: '🤖', title: 'Automation',  desc: 'AI-powered intelligent processes.' },
]

export function About() {
  return (
    <section id="about" className="relative z-[5] px-12 py-24 border-b border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.012)]">
      <SectionEyebrow>{'// 01 · ABOUT'}</SectionEyebrow>
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] mb-14">
        We Are <span className="text-[#FF6A00]">Zynex Labs</span>
      </h2>
      <div className="grid grid-cols-2 gap-16 items-start">
        <AnimatedSection direction="left">
          <div className="text-[16px] text-[#888] leading-[1.8] space-y-4">
            <p>Zynex Labs S.A.S. is an <strong className="text-[#ccc] font-medium">advanced technology infrastructure company</strong> specialized in software development, artificial intelligence, enterprise automation, and Web3 solutions.</p>
            <p>We design scalable digital platforms, modern architectures, and intelligent systems that help companies and organizations evolve technologically — building solutions <strong className="text-[#ccc] font-medium">ready for the future</strong>.</p>
            <p>Our approach combines innovation, performance, user experience, and emerging technologies to create systems that last.</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-3">
          {VALUE_CARDS.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.08}>
              <div className="bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-5 transition-all duration-[250ms] hover:border-[rgba(255,106,0,0.22)] hover:bg-[rgba(255,106,0,0.08)] hover:-translate-y-[3px] cursor-default">
                <div className="text-[22px] mb-2.5">{card.icon}</div>
                <div className="text-[13px] font-bold text-[#ccc] mb-1.5">{card.title}</div>
                <div className="text-[12px] text-[#444] leading-[1.6]">{card.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
