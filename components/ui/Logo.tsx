interface LogoProps {
  className?: string
  size?: 'md' | 'lg'
}

/** Solid black square mark with an angular white "Z", followed by the ZYNEX LABS wordmark. */
export function Logo({ className = '', size = 'md' }: LogoProps) {
  const mark = size === 'lg' ? 32 : 24
  return (
    <span className={`inline-flex items-center gap-2.5 text-[var(--ink)] ${className}`} aria-label="Zynex Labs">
      <svg width={mark} height={mark} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
        <rect width="24" height="24" fill="#0a0a0a" />
        <polygon points="6,6 18,6 18,9 10.5,15 18,15 18,18 6,18 6,15 13.5,9 6,9" fill="#ffffff" />
      </svg>
      <span
        className={`font-display font-semibold leading-none tracking-[-0.02em] ${
          size === 'lg' ? 'text-[26px]' : 'text-[20px]'
        }`}
      >
        ZYNEX LABS
      </span>
    </span>
  )
}
