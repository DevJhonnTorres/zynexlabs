'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CALENDLY_URL } from '@/lib/constants'

const STATS = [
  { value: '5',   label: 'Core Verticals' },
  { value: '30+', label: 'Technologies' },
  { value: '4+',  label: 'Projects' },
  { value: '24/7', label: 'Infrastructure' },
]

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center border-b border-[rgba(255,255,255,0.07)] px-12 py-24">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 font-mono text-[11px] tracking-[4px] text-[rgba(255,106,0,0.7)] uppercase mb-10"
        >
          <span
            className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full shadow-[0_0_6px_#FF6A00]"
            style={{ animation: 'blink 2s ease-in-out infinite' }}
          />
          ZYNEX LABS · COLOMBIA → WORLD
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(54px,8vw,110px)] font-black leading-[0.93] tracking-[-4px] mb-8"
        >
          We Build<br />
          Digital<br />
          <span className="text-[#FF6A00]">Infrastructure.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[18px] text-[#666] leading-[1.75] max-w-[500px] mb-10"
        >
          AI systems, automation pipelines, Web3 protocols, and scalable software
          for the companies of tomorrow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-20"
        >
          <Button variant="primary" onClick={() => window.open(CALENDLY_URL, '_blank')}>
            Schedule a Free Call
          </Button>
          <Button
            variant="ghost"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work →
          </Button>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-[rgba(255,255,255,0.07)] mb-12" />

        {/* Stats */}
        <div className="grid grid-cols-4 gap-10">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08} direction="up">
              <div>
                <div className="text-[clamp(38px,4vw,60px)] font-black tracking-[-2px] text-white leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-[#444] tracking-[3px] uppercase">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
