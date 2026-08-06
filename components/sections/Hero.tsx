'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CALENDLY_URL } from '@/lib/constants'

const STATS = [
  { value: '5',    label: 'Core Verticals' },
  { value: '35+',  label: 'Technologies' },
  { value: '4+',   label: 'Projects Delivered' },
  { value: '2024', label: 'Founded' },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between border-b border-[var(--border)] px-6 md:px-12 py-10 md:py-20">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col justify-between flex-1 gap-16">

        {/* Top: eyebrow + headline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[9px] tracking-[5px] text-[var(--label)] uppercase mb-10"
          >
            DIGITAL ENGINEERING STUDIO · COLOMBIA → WORLD
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(56px,8vw,110px)] font-black leading-[0.93] tracking-[-4px]"
          >
            We Build<br />
            Infrastructure<br />
            <span className="text-[var(--dim)]">That Lasts.</span>
          </motion.h1>
        </div>

        {/* Bottom: subtext + CTAs */}
        <div className="flex items-end justify-between">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] text-[var(--muted)] leading-[1.75] max-w-[360px] opacity-50"
          >
            AI · Web3 · Cloud · Software Development<br />
            Senior-led. Remote-first. Colombia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col items-end gap-3"
          >
            <button
              onClick={() => window.open(CALENDLY_URL, '_blank')}
              className="bg-white text-black font-bold text-[12px] tracking-[2px] px-10 py-3.5 hover:bg-[rgba(255,255,255,0.85)] transition-colors duration-200 cursor-pointer"
            >
              START A PROJECT
            </button>
            <Link
              href="/projects"
              className="text-[12px] text-[var(--dim)] hover:text-white transition-colors duration-200 no-underline tracking-[1px]"
            >
              View our work →
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-10 border-t border-[var(--border)]"
        >
          {STATS.map(stat => (
            <div key={stat.label}>
              <div className="text-[clamp(36px,4vw,56px)] font-black tracking-[-2px] text-white leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[9px] text-[var(--dim)] tracking-[3px] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
