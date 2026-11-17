import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/ui/SectionHeading'

interface PageHeaderProps {
  /** Mono section number, e.g. "01" */
  number?: string
  section: string
  title: string
  /** Rendered after the title as an italic <em>. */
  titleItalic?: string
  subtitle?: string
  children?: ReactNode
}

export function PageHeader({ number, section, title, titleItalic, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] px-5 pb-14 pt-16 md:px-12 md:pb-20 md:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px]">
        <Eyebrow number={number}>{section}</Eyebrow>
        <h1 className="mb-6 font-display text-[clamp(44px,7.5vw,104px)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--ink)]">
          {title}
          {titleItalic && <> <em>{titleItalic}</em></>}
        </h1>
        {subtitle && (
          <p className="max-w-[680px] text-[18px] leading-[1.7] text-[var(--muted)] md:text-[20px]">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  )
}
