'use client'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ variant, children, onClick, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-bold text-[13px] tracking-[0.5px] cursor-pointer transition-all duration-200 border-none'
  const styles = {
    primary: 'bg-[#FF6A00] text-black px-8 py-3.5 hover:bg-[#ff7c1a]',
    ghost:   'border border-[rgba(255,255,255,0.12)] text-[#777] px-8 py-3.5 hover:border-[rgba(255,255,255,0.3)] hover:text-white',
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
