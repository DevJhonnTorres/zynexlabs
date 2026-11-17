'use client'

import { useState } from 'react'
import type { App } from '@/lib/constants'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

function hostname(url: string) {
  try {
    return new URL(url).hostname
  } catch {
    return url
  }
}

export function AppCard({ app }: { app: App }) {
  const [imgOk, setImgOk] = useState(true)
  // Local screenshots in /public/apps/<slug>.jpg (regenerate when an app changes)
  const shot = `/apps/${app.slug}.jpg`

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-none border border-[var(--line)] bg-white">
      {/* Browser frame */}
      <div className="border-b border-[var(--line)]">
        <div className="flex items-center gap-1.5 border-b border-[var(--line)] bg-[var(--surface)] px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#d4d4d4]" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-[#d4d4d4]" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-[#d4d4d4]" aria-hidden="true" />
          <span className="ml-2 truncate font-mono text-[12px] text-[var(--label)]">{hostname(app.url)}</span>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
          <div
            className="absolute inset-0 flex items-center justify-center font-display text-[96px] font-medium text-[var(--dim)]"
            aria-hidden="true"
          >
            {app.name.charAt(0)}
          </div>
          {imgOk && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={shot}
              alt={`${app.name} screenshot`}
              loading="lazy"
              onError={() => setImgOk(false)}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-1 text-[12px] uppercase tracking-[0.25em] text-[var(--label)]">{app.category}</div>
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="mr-auto font-display text-[22px] font-medium leading-tight tracking-[-0.02em] text-[var(--ink)]">
            {app.name}
          </h3>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-[var(--muted)]">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--ok)]" aria-hidden="true" />
            Live
          </span>
        </div>
        <p className="mb-2 text-[16px] text-[var(--ink)]">{app.tagline}</p>
        <p className="mb-5 text-[15px] leading-[1.7] text-[var(--muted)]">{app.description}</p>
        <div className="mb-6 flex flex-wrap gap-1.5">
          {app.tags.map(t => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-auto">
          <Button href={app.url} external variant="secondary" className="w-full sm:w-auto">
            Open app ↗
          </Button>
        </div>
      </div>
    </article>
  )
}
