'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { calcScrollProgress } from '@/lib/scroll-utils'

const PHRASES = [
  'Engineering without compromise.',
  'Every system built to last five years, not five months.',
  'Senior-led, remote-first, Colombia to the world.',
  'AI · Web3 · Cloud — the infrastructure of tomorrow.',
] as const

export function ScrollCanvas() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const phraseRef = useRef<HTMLParagraphElement>(null)
  const progressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // ── Scene / Camera ──
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 4

    // ── Geometry ──
    const geo = new THREE.IcosahedronGeometry(1.5, 4)
    // Store original vertex positions for morphing
    const originalPositions = new Float32Array(geo.attributes.position.array)

    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    })
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)

    // ── Resize ──
    function onResize() {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      renderer.setSize(W, H)
      camera.aspect = W / H
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(canvas)
    onResize()

    // ── Scroll ──
    function onScroll() {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY
      progressRef.current = calcScrollProgress(
        window.scrollY,
        sectionTop,
        section.offsetHeight,
        window.innerHeight,
      )

      // Update DOM refs directly — no React re-render
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progressRef.current * 100}%`
      }
      if (phraseRef.current) {
        const idx = Math.min(
          Math.floor(progressRef.current * PHRASES.length),
          PHRASES.length - 1,
        )
        phraseRef.current.textContent = PHRASES[idx]
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // ── Animation loop ──
    let animId: number
    let t = 0

    function animate() {
      animId = requestAnimationFrame(animate)
      t += 0.012
      const p = progressRef.current

      // Morph vertices: radial displacement via sin/cos noise, scaled by progress
      const positions = geo.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        const ox = originalPositions[i]
        const oy = originalPositions[i + 1]
        const oz = originalPositions[i + 2]
        const len = Math.sqrt(ox * ox + oy * oy + oz * oz)
        const noise =
          Math.sin(ox * 3 + t * 0.7) *
          Math.cos(oy * 3 + t * 0.5) *
          Math.sin(oz * 2 + t * 0.9)
        const disp = noise * p * 0.55
        positions[i]     = ox + (ox / len) * disp
        positions[i + 1] = oy + (oy / len) * disp
        positions[i + 2] = oz + (oz / len) * disp
      }
      geo.attributes.position.needsUpdate = true

      // Slow continuous rotation
      mesh.rotation.x = t * 0.08
      mesh.rotation.y = t * 0.12

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      renderer.dispose()
      geo.dispose()
      mat.dispose()
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ height: '300vh' }}>
      {/* Sticky viewport wrapper */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--bg)',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />

        {/* Overlay — bottom-left */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '40px 48px',
            pointerEvents: 'none',
          }}
        >
          {/* Progress bar */}
          <div
            style={{
              height: 1,
              background: 'rgba(255,255,255,0.08)',
              marginBottom: 16,
            }}
          >
            <div
              ref={progressBarRef}
              style={{
                height: '100%',
                background: '#fff',
                width: '0%',
                transition: 'width 80ms linear',
              }}
            />
          </div>

          {/* Dynamic phrase */}
          <p
            ref={phraseRef}
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: 15,
              lineHeight: 1.65,
              maxWidth: 400,
              margin: 0,
              fontFamily: 'var(--font-geist-sans)',
            }}
          >
            {PHRASES[0]}
          </p>

          {/* Scroll hint */}
          <div
            style={{
              color: 'rgba(255,255,255,0.12)',
              fontSize: 9,
              letterSpacing: 4,
              fontFamily: 'var(--font-geist-mono)',
              marginTop: 10,
            }}
          >
            ↓ SCROLL TO EXPLORE
          </div>
        </div>
      </div>
    </section>
  )
}
