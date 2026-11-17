import Link from 'next/link'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: Variant
  href?: string
  external?: boolean
  size?: 'md' | 'lg'
  className?: string
  children: ReactNode
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  type?: 'button' | 'submit'
  disabled?: boolean
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-accent text-black hover:bg-accent-2 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(255,106,0,0.7)]',
  secondary:
    'border border-[var(--border-strong)] text-[var(--text)] hover:border-accent hover:text-accent-2 hover:-translate-y-0.5',
  ghost: 'text-[var(--muted)] hover:text-white',
}

export function Button({
  variant = 'primary',
  href,
  external,
  size = 'md',
  className = '',
  children,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${
    size === 'lg' ? 'text-[15px] px-8 py-3.5' : 'text-[14px] px-6 py-2.5'
  } ${VARIANTS[variant]} ${className}`

  if (href) {
    if (external || /^https?:|^mailto:/.test(href)) {
      return (
        <a
          href={href}
          className={cls}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
