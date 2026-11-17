import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  highlight?: boolean
}

export function Card({ children, className = '', hover = false, highlight = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 md:p-7 ${
        highlight
          ? 'border-[rgba(255,106,0,0.3)] bg-[var(--accent-soft)]'
          : 'border-[var(--border)] bg-[var(--surface)]'
      } ${hover ? 'card-glow' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
