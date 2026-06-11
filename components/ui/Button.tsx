'use client'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ variant, children, onClick, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-bold text-[13px] tracking-[1px] cursor-pointer transition-all duration-200 border-none'
  const styles = {
    primary: 'bg-white text-black px-8 py-3.5 hover:bg-[rgba(255,255,255,0.85)]',
    ghost:
      'border border-[rgba(255,255,255,0.18)] text-[var(--dim)] px-8 py-3.5 hover:border-[rgba(255,255,255,0.4)] hover:text-white',
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
