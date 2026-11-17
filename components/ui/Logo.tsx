interface LogoProps {
  className?: string
  size?: 'sm' | 'md'
}

/** Text + SVG wordmark: angular orange "Z" mark, "ZYNEX" white, "LABS" orange. */
export function Logo({ className = '', size = 'md' }: LogoProps) {
  const mark = size === 'sm' ? 22 : 28
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Zynex Labs">
      <svg width={mark} height={mark} viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="zlogo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF8A3D" />
            <stop offset="1" stopColor="#FF6A00" />
          </linearGradient>
        </defs>
        <polygon points="3,4 29,4 29,10 14,22 29,22 29,28 3,28 3,22 18,10 3,10" fill="url(#zlogo-g)" />
      </svg>
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className={`font-black tracking-[-0.5px] text-white ${size === 'sm' ? 'text-[16px]' : 'text-[19px]'}`}>ZYNEX</span>
        <span className={`font-bold tracking-[3px] text-accent ${size === 'sm' ? 'text-[11px]' : 'text-[12px]'}`}>LABS</span>
      </span>
    </span>
  )
}
