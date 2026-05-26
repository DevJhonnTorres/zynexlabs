'use client'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ variant, children, onClick, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-bold tracking-wide cursor-pointer border-none transition-all duration-[250ms] rounded-sm'
  const styles = {
    primary: 'bg-[#FF6A00] text-white px-7 py-3 shadow-[0_4px_28px_rgba(255,106,0,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,106,0,0.5)]',
    ghost:   'bg-[rgba(255,255,255,0.025)] text-[#888] px-7 py-3 border border-[rgba(255,255,255,0.06)] backdrop-blur-sm hover:text-white hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.05)]',
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
