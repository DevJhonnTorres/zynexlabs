import Link from 'next/link'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'inverse' | 'box' | 'ghost'

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
  primary: 'bg-[var(--ink)] text-white border border-[var(--ink)] hover:bg-[#262626] hover:border-[#262626]',
  secondary: 'bg-white text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white',
  inverse: 'bg-white text-[var(--ink)] border border-white hover:bg-[#e4e4e4] hover:border-[#e4e4e4]',
  box: 'bg-white text-[var(--ink)] border border-[var(--line)] hover:border-[var(--ink)]',
  ghost: 'text-[var(--muted)] hover:text-[var(--ink)]',
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
  const sizing =
    variant === 'box'
      ? 'text-[15px] px-5 py-2.5'
      : size === 'lg'
        ? 'text-[16px] font-medium px-8 py-4'
        : 'text-[15px] font-medium px-6 py-3'
  const cls = `inline-flex items-center justify-center gap-2 rounded-none no-underline transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${sizing} ${VARIANTS[variant]} ${className}`

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
