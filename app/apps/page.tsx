import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { AppsGrid } from '@/components/apps/AppsGrid'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Live Apps — Zynex Labs',
  description:
    'Products and platforms built by Zynex Labs that are deployed and running in production today: Web3 exchanges, AI agent payments, wallets, storefronts and more.',
}

export default function AppsPage() {
  return (
    <>
      <PageHeader
        section="05 · APPS"
        title="Live apps"
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
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-elev)] px-6 py-14 text-center md:px-12">
              <div className="glow-orange pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-1.2px]">Want yours live next?</h2>
                <p className="mx-auto mb-8 max-w-[480px] text-[16px] text-[var(--muted)]">
                  Tell us what you need and we will tell you honestly how we would build it.
                </p>
                <Button href="/contact" size="lg">Book a free call</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
