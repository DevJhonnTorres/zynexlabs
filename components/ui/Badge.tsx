import type { ReactNode } from 'react'

type Tone = 'neutral' | 'accent' | 'live'

interface BadgeProps {
  tone?: Tone
  children: ReactNode
  className?: string
  mono?: boolean
}

const TONES: Record<Tone, string> = {
  neutral: 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]',
  accent: 'border-[rgba(255,106,0,0.35)] bg-[var(--accent-soft)] text-accent-2',
  live: 'border-[rgba(34,197,94,0.35)] bg-[rgba(34,197,94,0.1)] text-[#4ade80]',
}

export function Badge({ tone = 'neutral', children, className = '', mono = true }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] leading-none tracking-[0.5px] ${
        mono ? 'font-mono' : ''
      } ${TONES[tone]} ${className}`}
    >
      {tone === 'live' && <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--ok)]" aria-hidden="true" />}
      {children}
    </span>
  )
}
