import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'
import { Methodology } from '@/components/sections/Methodology'
import { Vision } from '@/components/sections/Vision'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      {/* Subtle top radial glow — single fixed element, zero JS */}
      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 45% at 50% -5%, rgba(255,106,0,0.06) 0%, transparent 65%)',
        }}
      />
      <div className="relative z-[5]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Stack />
          <Methodology />
          <Vision />
          <CTAFinal />
        </main>
        <Footer />
      </div>
    </>
  )
}
