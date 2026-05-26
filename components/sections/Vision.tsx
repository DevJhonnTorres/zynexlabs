import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Vision() {
  return (
    <section className="border-b border-[rgba(255,255,255,0.07)] px-12 py-32 text-center">
      <div className="max-w-[800px] mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[10px] tracking-[3px] text-[rgba(255,106,0,0.6)] mb-8 flex justify-center">
            05 · VISION
          </div>
          <h2 className="text-[clamp(32px,4.5vw,64px)] font-black tracking-[-3px] leading-[1.02] mb-8">
            Building the<br />
            <span className="text-[#FF6A00]">Next Generation</span><br />
            of Digital Infrastructure
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.85] max-w-[560px] mx-auto">
            At Zynex Labs we believe the next generation of companies will be powered by artificial intelligence,
            automation, and decentralized technologies. Our mission is to build the digital infrastructure that
            connects Latin America with the new global technology economy.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
