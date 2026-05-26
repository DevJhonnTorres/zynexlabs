'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Button } from '@/components/ui/Button'
import { CALENDLY_URL } from '@/lib/constants'

export function CTAFinal() {
  return (
    <section className="relative z-[5] text-center px-12 py-24 border-b border-[rgba(255,255,255,0.04)]">
      <SectionEyebrow className="justify-center mb-5">{'// READY TO BUILD'}</SectionEyebrow>
      <AnimatedSection>
        <h2 className="text-[clamp(36px,5vw,60px)] font-black tracking-[-2px] leading-[1.1] mb-8 max-w-[700px] mx-auto">
          Transform your vision into<br /><span className="text-[#FF6A00]">digital infrastructure</span>
        </h2>
        <Button
          variant="primary"
          onClick={() => window.open(CALENDLY_URL, '_blank')}
          className="text-[14px] !px-10 !py-4"
        >
          📅 Schedule a Free Discovery Call
        </Button>
        <div className="mt-4 font-mono text-[10px] text-[#444] tracking-[2px]">
          CALENDLY · FREE 30-MIN SESSION · NO COMMITMENT
        </div>
      </AnimatedSection>
    </section>
  )
}
