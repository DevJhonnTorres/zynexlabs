'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { CALENDLY_URL } from '@/lib/constants'

const HeroCanvas = dynamic(
  () => import('@/components/canvas/HeroCanvas').then(m => ({ default: m.HeroCanvas })),
  { ssr: false }
)

const HUD = [
  'top-6 left-6 border-t-2 border-l-2',
  'top-6 right-6 border-t-2 border-r-2',
  'bottom-6 left-6 border-b-2 border-l-2',
  'bottom-6 right-6 border-b-2 border-r-2',
]

function useLiveHash() {
  const [hash, setHash] = useState('0x4f2a...8c91 · BLOCK #19,847,221 · GAS: 12 GWEI')
  useEffect(() => {
    const id = setInterval(() => {
      const h = () => Math.floor(Math.random() * 0xffff).toString(16).padStart(4, '0')
      const block = (19847221 + Math.floor(Math.random() * 100)).toLocaleString()
      const gas = Math.floor(10 + Math.random() * 18)
      setHash(`0x${h()}...${h()} · BLOCK #${block} · GAS: ${gas} GWEI`)
    }, 3500)
    return () => clearInterval(id)
  }, [])
  return hash
}

export function Hero() {
  const hash = useLiveHash()

  return (
    <section className="relative z-[5] min-h-[calc(100vh-64px)] grid grid-cols-[1.1fr_0.9fr] items-center gap-12 px-12 py-20">
      {HUD.map((cls, i) => (
        <span key={i} className={`absolute w-7 h-7 border-[rgba(255,106,0,0.5)] pointer-events-none ${cls}`} />
      ))}

      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 border border-[rgba(255,106,0,0.22)] rounded-full px-3.5 py-1 font-mono text-[9px] tracking-[3px] uppercase text-[#FF6A00] bg-[rgba(255,106,0,0.08)] mb-7">
          <span className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full shadow-[0_0_8px_#FF6A00]" style={{ animation: 'blink 1.6s ease-in-out infinite' }} />
          ADVANCED TECHNOLOGY INFRASTRUCTURE
        </div>

        <div className="font-mono text-[9px] text-[rgba(255,106,0,0.35)] tracking-wide mb-5 transition-all duration-500">
          {hash}
        </div>

        <h1 className="text-[clamp(40px,5.5vw,68px)] font-black leading-[1.04] tracking-[-2px] mb-6">
          Engineering<br />
          <span style={{
            background: 'linear-gradient(95deg, #FF6A00 0%, #FF9A40 50%, #FF6A00 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shimmer 4s linear infinite',
          }}>
            Intelligent
          </span><br />
          Digital Infra
        </h1>

        <p className="text-[15px] text-[#888] leading-[1.75] max-w-[460px] mb-9 border-l-2 border-[rgba(255,106,0,0.22)] pl-4">
          Zynex Labs builds <strong className="text-[#ccc] font-medium">advanced technological solutions</strong> —
          AI, enterprise automation, high-performance software and Web3 infrastructure for innovative companies.
        </p>

        <div className="flex gap-3.5 flex-wrap mb-12">
          <Button variant="primary" onClick={() => window.open(CALENDLY_URL, '_blank')}>
            📅 Schedule a Meeting
          </Button>
          <Button variant="ghost">Explore Projects →</Button>
        </div>

        <div className="flex border border-[rgba(255,255,255,0.06)] rounded-[4px] overflow-hidden">
          {[['5+', 'PROJECTS'], ['4', 'VERTICALS'], ['∞', 'SCALE'], ['100%', 'CUSTOM']].map(([n, l]) => (
            <div key={l} className="flex-1 px-5 py-4 border-r border-[rgba(255,255,255,0.06)] last:border-r-0 relative">
              <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF6A00] to-transparent" />
              <div className="font-mono text-[26px] font-black text-[#FF6A00]" style={{ textShadow: '0 0 20px rgba(255,106,0,0.4)' }}>{n}</div>
              <div className="font-mono text-[8px] text-[#444] tracking-[2px] mt-1">{l}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Canvas */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <HeroCanvas />
      </motion.div>
    </section>
  )
}
