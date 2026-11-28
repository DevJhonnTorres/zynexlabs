interface LogoProps {
  className?: string
  size?: 'md' | 'lg'
}

/** Isometric cube mark followed by the ZYNEX LABS wordmark (single transparent PNG, 816x294). */
export function Logo({ className = '', size = 'md' }: LogoProps) {
  const height = size === 'lg' ? 48 : 36
  const width = Math.round((height * 840) / 318)
  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-full.png" alt="Zynex Labs" width={width} height={height} className="shrink-0" style={{ height, width: 'auto' }} />
    </span>
  )
}
