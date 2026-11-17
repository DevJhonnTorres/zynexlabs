import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/ui/SectionHeading'

interface PageHeaderProps {
  section: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHeader({ section, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] px-5 pb-14 pt-16 md:px-12 md:pb-20 md:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="glow-orange pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[760px] max-w-full -translate-x-1/2"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <Eyebrow>{section}</Eyebrow>
        <h1 className="mb-6 text-[clamp(40px,7vw,84px)] font-black leading-[1] tracking-[-0.04em] text-[var(--text)]">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-[620px] text-[17px] leading-[1.7] text-[var(--muted)] md:text-[18px]">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  )
}
