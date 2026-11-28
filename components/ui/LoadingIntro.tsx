'use client'

import { useEffect, useState } from 'react'

export function LoadingIntro() {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('zynex-loading-seen') === 'true') return

    setVisible(true)
    document.body.style.overflow = 'hidden'

    const startedAt = performance.now()
    const duration = 2200
    let frame = 0

    const tick = (now: number) => {
      const elapsed = now - startedAt
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(next)

      if (elapsed < duration) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    const exitTimer = window.setTimeout(() => {
      setExiting(true)
      sessionStorage.setItem('zynex-loading-seen', 'true')
    }, duration)
    const hideTimer = window.setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, duration + 700)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(exitTimer)
      window.clearTimeout(hideTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`loading-intro fixed inset-0 z-[100] flex min-h-[100svh] flex-col overflow-hidden bg-[#090909] text-white ${
        exiting ? 'loading-exiting' : ''
      }`}
      role="status"
      aria-label={`Loading Zynex Labs, ${progress}%`}
      aria-live="polite"
    >
      <div className="loading-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <header className="relative flex h-[72px] shrink-0 items-center border-b border-white/10 px-5 md:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
          <div className="loading-reveal flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-full-white.png" alt="Zynex Labs" width={95} height={36} style={{ height: 36, width: 'auto' }} />
          </div>
          <span className="loading-reveal font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
            Loading experience
          </span>
        </div>
      </header>

      <div className="relative flex flex-1 items-center px-5 md:px-12">
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="loading-reveal mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">
            Advanced technology infrastructure
          </p>
          <p aria-hidden="true" className="loading-title max-w-[900px] font-display text-[clamp(52px,9vw,124px)] font-medium leading-[0.92] tracking-[-0.055em]">
            Trust,<br />
            <em className="text-white/72">Engineered.</em>
          </p>
        </div>
      </div>

      <footer className="relative border-t border-white/10 px-5 py-5 md:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] items-center gap-5">
          <div className="h-px flex-1 overflow-hidden bg-white/15">
            <div
              className="loading-progress h-px bg-white transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="w-12 text-right font-mono text-[12px] tabular-nums text-white/70">
            {String(progress).padStart(3, '0')}%
          </span>
        </div>
      </footer>
    </div>
  )
}
