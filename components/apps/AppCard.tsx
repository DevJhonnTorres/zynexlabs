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
  const shot = `https://image.thum.io/get/width/1200/crop/750/${app.url}`

  return (
    <article className="card-glow group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
      {/* Preview */}
      <div className="p-3 pb-0">
        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]">
          <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden="true" />
            <span className="ml-2 truncate rounded-md bg-[var(--surface-2)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--dim)]">
              {hostname(app.url)}
            </span>
          </div>
          <div
            className="relative aspect-[16/10] w-full"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,106,0,0.28) 0%, rgba(255,138,61,0.06) 45%, #0d0d12 100%)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-[64px] font-black text-white/25" aria-hidden="true">
              {app.name.charAt(0)}
            </div>
            {imgOk && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={shot}
                alt={`${app.name} screenshot`}
                loading="lazy"
                onError={() => setImgOk(false)}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className="mr-auto text-[19px] font-bold leading-tight text-white">{app.name}</h3>
          <Badge tone="live">Live</Badge>
          <Badge tone="accent">{app.category}</Badge>
        </div>
        <p className="mb-2 text-[15px] font-medium text-[var(--text)]">{app.tagline}</p>
        <p className="mb-5 text-[14px] leading-[1.7] text-[var(--muted)]">{app.description}</p>
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
