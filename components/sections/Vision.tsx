import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function Vision() {
  return (
    <section
      className="relative z-[5] text-center px-12 py-24 border-b border-[rgba(255,255,255,0.04)]"
      style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,106,0,0.05) 0%, transparent 70%)' }}
    >
      <SectionEyebrow className="justify-center mb-5">{'// 06 · VISION'}</SectionEyebrow>
      <AnimatedSection>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] mb-6 max-w-[640px] mx-auto">
          Building the <span className="text-[#FF6A00]">Next Generation</span><br />of Digital Infrastructure
        </h2>
        <p className="text-[16px] text-[#888] leading-[1.8] max-w-[560px] mx-auto">
          At Zynex Labs we believe the next generation of companies will be powered by artificial intelligence, automation, and decentralized technologies. Our mission is to build the digital infrastructure that connects Latin America with the new global technology economy.
        </p>
      </AnimatedSection>
    </section>
  )
}
