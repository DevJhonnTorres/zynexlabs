import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Ticker } from '@/components/sections/Ticker'
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
      {/* CSS-only background layers — fixed, zero JS cost */}
      <div className="bg-grid" aria-hidden />
      <div className="bg-glow" aria-hidden />

      {/* Laser lines */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
        <div className="laser" style={{ top: '22%', '--d': '11s', '--delay': '0s' } as React.CSSProperties} />
        <div className="laser" style={{ top: '55%', '--d': '14s', '--delay': '3s' } as React.CSSProperties} />
        <div className="laser" style={{ top: '78%', '--d': '9s',  '--delay': '7s' } as React.CSSProperties} />
        <div className="laser-v" style={{ left: '18%', '--d': '16s', '--delay': '1s' } as React.CSSProperties} />
        <div className="laser-v" style={{ left: '65%', '--d': '12s', '--delay': '5s' } as React.CSSProperties} />
        <div className="laser-v" style={{ left: '88%', '--d': '18s', '--delay': '9s' } as React.CSSProperties} />
      </div>

      {/* Floating blockchain blocks */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
        <div className="b-block" style={{ left: '5%',  '--d': '22s', '--delay': '0s'  } as React.CSSProperties}>
          {`BLOCK #4821093\nTX: 0xf3a...91c\nGAS: 21000`}
        </div>
        <div className="b-block" style={{ left: '25%', '--d': '18s', '--delay': '4s'  } as React.CSSProperties}>
          {`BLOCK #4821094\nTX: 0x7b2...44d\nGAS: 45000`}
        </div>
        <div className="b-block" style={{ left: '55%', '--d': '25s', '--delay': '8s'  } as React.CSSProperties}>
          {`BLOCK #4821095\nTX: 0xc9e...f1a\nGAS: 63000`}
        </div>
        <div className="b-block" style={{ left: '75%', '--d': '20s', '--delay': '2s'  } as React.CSSProperties}>
          {`BLOCK #4821096\nTX: 0x1d4...82b\nGAS: 21000`}
        </div>
        <div className="b-block" style={{ left: '88%', '--d': '15s', '--delay': '11s' } as React.CSSProperties}>
          {`BLOCK #4821097\nTX: 0xa5f...c30\nGAS: 38000`}
        </div>
      </div>

      {/* Page content */}
      <div className="relative z-[5]">
        <Navbar />
        <main>
          <Hero />
          <Ticker />
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
