import Link from 'next/link'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  number?: string
  title: ReactNode
  /** Rendered after the title as an italic <em> (the signature motif). */
  titleItalic?: string
  subtitle?: string
  linkHref?: string
  linkLabel?: string
  className?: string
}

export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-[var(--label)]">
      {number && <span className="font-mono tracking-[0.1em] text-[var(--ink)]">{number}</span>}
      {number && <span className="h-px w-8 bg-[var(--ink)]" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  number,
  title,
  titleItalic,
  subtitle,
  linkHref,
  linkLabel,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-14 ${className}`}>
      <div className="max-w-[720px]">
        <Eyebrow number={number}>{eyebrow}</Eyebrow>
        <h2 className="font-display text-[clamp(36px,5vw,64px)] font-medium leading-[1.02] tracking-[-0.04em] text-[var(--ink)]">
          {title}
          {titleItalic && <> <em>{titleItalic}</em></>}
        </h2>
        {subtitle && <p className="mt-5 text-[17px] leading-[1.7] text-[var(--muted)]">{subtitle}</p>}
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="shrink-0 text-[15px] font-medium text-[var(--blue)] no-underline transition-colors hover:text-[var(--ink)]"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  )
}
