interface SectionEyebrowProps {
  children: React.ReactNode
  className?: string
}

export function SectionEyebrow({ children, className = '' }: SectionEyebrowProps) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[9px] text-[#FF6A00] tracking-[4px] uppercase mb-4 ${className}`}>
      {children}
      <span className="flex-1 h-px bg-gradient-to-r from-[rgba(255,106,0,0.22)] to-transparent" />
    </div>
  )
}
