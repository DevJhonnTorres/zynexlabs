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
      className={`rounded-none border p-6 md:p-7 ${
        highlight ? 'border-[var(--ink)] bg-[var(--surface)]' : 'border-[var(--line)] bg-white'
      } ${hover ? 'card-lift' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
