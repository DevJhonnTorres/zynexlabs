'use client'

import { useEffect, useRef } from 'react'

const HASHES = ['0x4f2a', '0x9b3f', '0x7c1d', '0x2e5b', '0x1a8d']

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0, cx = 0, cy = 0
    let hexCache: HTMLCanvasElement | null = null
    let animId = 0
    let lastTs = 0
    const MS_PER_FRAME = 1000 / 50

    const nodes = Array.from({ length: 30 }, () => ({
      x: 0, y: 0,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1.5 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
    }))

    const blocks = Array.from({ length: 5 }, (_, i) => ({
      angle: (i / 5) * Math.PI * 2,
      radius: 120 + (i % 2) * 24,
      speed: 0.006 + i * 0.002,
      w: 52, h: 22,
      hash: HASHES[i],
    }))

    function buildHexCache() {
      const off = document.createElement('canvas')
      off.width = W; off.height = H
      const oc = off.getContext('2d')!
      const S = 44, HH = S * Math.sqrt(3)
      oc.strokeStyle = 'rgba(255,106,0,0.045)'
      oc.lineWidth = 1
      for (let row = -1; row < H / HH + 2; row++) {
        for (let col = -1; col < W / (S * 1.5) + 2; col++) {
          const hx = col * S * 1.5
          const hy = row * HH + (col % 2 ? HH / 2 : 0)
          oc.beginPath()
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 180) * (60 * i - 30)
            const px = hx + S * Math.cos(a), py = hy + S * Math.sin(a)
            if (i) { oc.lineTo(px, py) } else { oc.moveTo(px, py) }
          }
          oc.closePath(); oc.stroke()
        }
      }
      hexCache = off
    }

    function resize() {
      if (!canvas) return
      W = canvas.offsetWidth; H = canvas.offsetHeight
      canvas.width = W; canvas.height = H
      cx = W / 2; cy = H / 2
      nodes.forEach(n => { n.x = Math.random() * W; n.y = Math.random() * H })
      buildHexCache()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    let t = 0
    function draw(ts: number) {
      animId = requestAnimationFrame(draw)
      if (!ctx || ts - lastTs < MS_PER_FRAME) return
      lastTs = ts
      ctx.clearRect(0, 0, W, H)

      if (hexCache) ctx.drawImage(hexCache, 0, 0)

      const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.5)
      rg.addColorStop(0, 'rgba(255,106,0,0.06)')
      rg.addColorStop(1, 'transparent')
      ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H)

      t += 0.012

      ;[70, 130, 185].forEach((r, i) => {
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255,106,0,${0.07 - 0.02 * i})`
        ctx.lineWidth = 1
        ctx.setLineDash(i === 2 ? [4, 8] : [])
        ctx.stroke(); ctx.setLineDash([])
      })

      blocks.forEach(b => {
        b.angle += b.speed
        const bx = cx + Math.cos(b.angle) * b.radius
        const by = cy + Math.sin(b.angle) * b.radius

        ctx.strokeStyle = 'rgba(255,106,0,0.12)'; ctx.setLineDash([3, 7]); ctx.lineWidth = 0.8
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(bx, by); ctx.stroke(); ctx.setLineDash([])

        ctx.fillStyle = 'rgba(0,0,0,0.85)'; ctx.strokeStyle = 'rgba(255,106,0,0.45)'; ctx.lineWidth = 1
        ctx.fillRect(bx - b.w / 2, by - b.h / 2, b.w, b.h)
        ctx.strokeRect(bx - b.w / 2, by - b.h / 2, b.w, b.h)
        ctx.fillStyle = 'rgba(255,106,0,0.7)'
        ctx.fillRect(bx - b.w / 2, by - b.h / 2, b.w, 2)

        ctx.font = '5.5px Courier New'; ctx.textAlign = 'center'
        ctx.fillStyle = 'rgba(255,106,0,0.8)'; ctx.fillText('BLOCK', bx, by - 3)
        ctx.fillStyle = 'rgba(255,140,0,0.5)'; ctx.fillText(b.hash, bx, by + 6)
      })

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
        n.phase += 0.03
        const g = 0.5 + Math.sin(n.phase) * 0.5
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,106,0,${0.35 + g * 0.45})`; ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < 10000) {
            ctx.strokeStyle = `rgba(255,106,0,${(1 - d2 / 10000) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke()
          }
        }
      }

      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + t * 0.25
        const end = 180
        const lg = ctx.createLinearGradient(cx, cy, cx + Math.cos(a) * end, cy + Math.sin(a) * end)
        lg.addColorStop(0, `rgba(255,106,0,${0.12 + Math.sin(t + i) * 0.05})`)
        lg.addColorStop(1, 'transparent')
        ctx.strokeStyle = lg; ctx.lineWidth = 0.8
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * end, cy + Math.sin(a) * end); ctx.stroke()
      }

      const sa = t * 1.8
      ctx.beginPath(); ctx.arc(cx, cy, 160, sa, sa + 0.6)
      ctx.strokeStyle = 'rgba(255,106,0,0.6)'; ctx.lineWidth = 1.5; ctx.stroke()

      const pulse = 0.7 + Math.sin(t * 1.5) * 0.3
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 22 * pulse)
      cg.addColorStop(0, `rgba(255,${106 + pulse * 30},0,0.85)`)
      cg.addColorStop(0.5, 'rgba(255,106,0,0.25)')
      cg.addColorStop(1, 'transparent')
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, 22 * pulse, 0, Math.PI * 2); ctx.fill()

      ctx.fillStyle = '#fff'
      ctx.font = `900 ${13 + pulse * 2}px Courier New`
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('Z', cx, cy)
      ctx.textBaseline = 'alphabetic'
    }

    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return (
    <div className="relative h-[520px] border border-[rgba(255,255,255,0.06)] rounded-[4px] overflow-hidden bg-black/30 backdrop-blur-sm">
      <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent z-10" />
      <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[rgba(255,106,0,0.4)]" />
      <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[rgba(255,106,0,0.4)]" />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[rgba(255,106,0,0.4)]" />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[rgba(255,106,0,0.4)]" />
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute bottom-3 right-4 font-mono text-[8px] text-[rgba(255,106,0,0.3)] tracking-[2px] text-right leading-relaxed z-10">
        REAL-TIME RENDER<br />ZYNEX_NODE ● ONLINE
      </div>
    </div>
  )
}
