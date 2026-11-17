import type { ReactNode } from 'react'

const P = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: "butt" as const,
  strokeLinejoin: "miter" as const,
}

const ICONS: Record<string, ReactNode> = {
  AI: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  SW: (
    <>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </>
  ),
  BC: (
    <>
      <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
      <path d="M12 11l8-4.5M12 11L4 6.5M12 11v9" />
    </>
  ),
  CD: (
    <>
      <path d="M7 18a4 4 0 010-8 5.5 5.5 0 0110.6-1.2A4.5 4.5 0 0117 18H7z" />
    </>
  ),
  UX: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8M12 18v3" />
    </>
  ),
}

export function ServiceIcon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...P}>
      {ICONS[name] ?? ICONS.SW}
    </svg>
  )
}
