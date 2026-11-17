import Link from 'next/link'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  linkHref?: string
  linkLabel?: string
  className?: string
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[2.5px] text-accent-2">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, linkHref, linkLabel, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div className="max-w-[640px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] tracking-[-1.2px] text-[var(--text)]">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-[16px] leading-[1.7] text-[var(--muted)]">{subtitle}</p>}
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="shrink-0 text-[14px] font-medium text-accent-2 no-underline transition-colors hover:text-white"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  )
}
