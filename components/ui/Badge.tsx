import type { ReactNode } from 'react'

type Tone = 'neutral' | 'live'

interface BadgeProps {
  tone?: Tone
  children: ReactNode
  className?: string
  mono?: boolean
}

const TONES: Record<Tone, string> = {
  neutral: 'border-[var(--line)] bg-white text-[var(--muted)]',
  live: 'border-[var(--line)] bg-white text-[var(--ink)]',
}

export function Badge({ tone = 'neutral', children, className = '', mono = true }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1.5 text-[12px] leading-none ${
        mono ? 'font-mono' : ''
      } ${TONES[tone]} ${className}`}
    >
      {tone === 'live' && <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--ok)]" aria-hidden="true" />}
      {children}
    </span>
  )
}
