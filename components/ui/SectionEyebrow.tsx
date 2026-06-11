interface SectionEyebrowProps {
  children: React.ReactNode
  className?: string
}

export function SectionEyebrow({ children, className = '' }: SectionEyebrowProps) {
  return (
    <div
      className={`font-mono text-[9px] text-[var(--label)] tracking-[4px] uppercase mb-4 ${className}`}
    >
      {children}
    </div>
  )
}
