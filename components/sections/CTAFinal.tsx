'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { CALENDLY_URL } from '@/lib/constants'

export function CTAFinal() {
  return (
    <section className="px-12 py-32 text-center border-b border-[var(--border)]">
      <div className="max-w-[700px] mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[9px] tracking-[4px] text-[var(--label)] mb-8 flex justify-center">
            {'// READY TO BUILD'}
          </div>
          <h2 className="text-[clamp(36px,5.5vw,76px)] font-black tracking-[-3px] leading-[1.0] mb-8">
            Transform your vision<br />into{' '}
            <span className="text-[var(--dim)]">digital infrastructure</span>
          </h2>
          <p className="text-[16px] text-[var(--muted)] leading-[1.75] mb-10 max-w-[460px] mx-auto opacity-50">
            Let&apos;s talk about your project. Free 30-minute discovery call, no commitment required.
          </p>
          <Button
            variant="primary"
            onClick={() => window.open(CALENDLY_URL, '_blank')}
            className="text-[14px] !px-12 !py-4"
          >
            Schedule a Free Discovery Call
          </Button>
          <div className="mt-5 font-mono text-[9px] text-[var(--dim)] tracking-[2px]">
            CALENDLY · FREE 30-MIN · NO COMMITMENT
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
