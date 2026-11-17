'use client'

import { useState } from 'react'
import { APPS, type App } from '@/lib/constants'
import { AppCard } from './AppCard'

type Filter = 'All' | App['category']

const TABS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'All' },
  { label: 'Products', value: 'Product' },
  { label: 'Client work', value: 'Client' },
  { label: 'Community', value: 'Community' },
  { label: 'Lab', value: 'Lab' },
]

export function AppsGrid() {
  const [filter, setFilter] = useState<Filter>('All')
  const list = filter === 'All' ? APPS : APPS.filter(a => a.category === filter)

  return (
    <>
      <div className="-mx-5 mb-10 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label="Filter apps by category">
        <div className="flex w-max gap-2">
          {TABS.map(tab => {
            const active = filter === tab.value
            const count = tab.value === 'All' ? APPS.length : APPS.filter(a => a.category === tab.value).length
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.value)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium transition-all duration-200 ${
                  active
                    ? 'border-accent bg-accent text-black'
                    : 'border-[var(--border-strong)] text-[var(--muted)] hover:border-accent hover:text-white'
                }`}
              >
                {tab.label}
                <span className={`font-mono text-[11px] ${active ? 'text-black/70' : 'text-[var(--dim)]'}`}>{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map(app => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </>
  )
}
