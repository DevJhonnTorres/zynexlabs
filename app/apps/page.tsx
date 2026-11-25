import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { AppsGrid } from '@/components/apps/AppsGrid'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Live Apps',
  alternates: { canonical: '/apps' },
  description:
    'Products and platforms built by Zynex Labs that are deployed and running in production today: Web3 exchanges, AI agent payments, wallets, storefronts and more.',
}

export default function AppsPage() {
  return (
    <>
      <PageHeader
        number="05"
        section="Apps"
        title="Live"
        titleItalic="apps."
        subtitle="Products and platforms we built that are deployed and running in production today. Click any to try it."
      />

      <section className="px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <AppsGrid />
        </div>
      </section>

      <section className="px-5 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="relative overflow-hidden bg-[var(--ink)] px-6 py-16 text-center text-white md:px-12">
              <div className="bg-grid-inverse pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <h2 className="mb-4 font-display text-[clamp(36px,5vw,64px)] font-medium leading-[1.02] tracking-[-0.04em]">
                  Want yours <em>live next?</em>
                </h2>
                <p className="mx-auto mb-8 max-w-[480px] text-[17px] text-white/70">
                  Tell us what you need and we will tell you honestly how we would build it.
                </p>
                <Button href="/contact" size="lg" variant="inverse">Book a free call</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
