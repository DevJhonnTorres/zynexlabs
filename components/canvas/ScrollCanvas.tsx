'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { calcScrollProgress, smoothstep } from '@/lib/scroll-utils'
import { CALENDLY_URL } from '@/lib/constants'

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
  const heroRef = useRef<HTMLDivElement>(null)
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
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 5

    // ── Sphere wireframe — fades out as blockchain forms ──
    const sphereGeo = new THREE.IcosahedronGeometry(1.5, 4)
    const originalPositions = new Float32Array(sphereGeo.attributes.position.array)
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    })
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat)
    scene.add(sphereMesh)

    // ── Blockchain target: each vertex expanded 2.5x outward ──
    const BC_SCALE = 2.5
    const targetPositions = new Float32Array(originalPositions.length)
    for (let i = 0; i < originalPositions.length; i++) {
      targetPositions[i] = originalPositions[i] * BC_SCALE
    }

    // ── Blockchain nodes (Points) — materialize as sphere expands ──
    const nodeGeo = new THREE.BufferGeometry()
    const nodeBuf = new Float32Array(originalPositions.length)
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodeBuf, 3))
    const nodeMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.055,
      transparent: true,
      opacity: 0,
    })
    const nodePoints = new THREE.Points(nodeGeo, nodeMat)
    scene.add(nodePoints)

    // ── Blockchain connections (LineSegments) ──
    // Precompute connected pairs from target proximity (nearest blockchain neighbors)
    const n = targetPositions.length / 3
    const pairs: [number, number][] = []
    const MIN_D2 = 0.09  // filter zero-length duplicate vertices
    const MAX_D2 = 3.24  // 1.8² — capture nearest neighbors at 2.5x scale
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = targetPositions[j * 3]     - targetPositions[i * 3]
        const dy = targetPositions[j * 3 + 1] - targetPositions[i * 3 + 1]
        const dz = targetPositions[j * 3 + 2] - targetPositions[i * 3 + 2]
        const d2 = dx * dx + dy * dy + dz * dz
        if (d2 > MIN_D2 && d2 < MAX_D2) pairs.push([i, j])
      }
    }
    const lineBuf = new Float32Array(pairs.length * 6)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(lineBuf, 3))
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 })
    const blockchainLines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(blockchainLines)

    // ── Resize ──
    function onResize() {
      const W = canvas!.offsetWidth
      const H = canvas!.offsetHeight
      renderer.setSize(W, H)
      camera.aspect = W / H
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(canvas)
    onResize()

    // ── Scroll ──
    function onScroll() {
      const sectionTop = section!.getBoundingClientRect().top + window.scrollY
      progressRef.current = calcScrollProgress(
        window.scrollY, sectionTop, section!.offsetHeight, window.innerHeight,
      )
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progressRef.current * 100}%`
      }
      if (phraseRef.current) {
        const idx = Math.min(Math.floor(progressRef.current * PHRASES.length), PHRASES.length - 1)
        phraseRef.current.textContent = PHRASES[idx]
      }
      // Hero fades out as blockchain starts forming
      if (heroRef.current) {
        const opacity = 1 - smoothstep(0.05, 0.38, progressRef.current)
        heroRef.current.style.opacity = String(opacity)
        heroRef.current.style.pointerEvents = opacity < 0.08 ? 'none' : 'auto'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // ── Animation loop ──
    let animId: number
    let t = 0

    function animate() {
      animId = requestAnimationFrame(animate)
      t += 0.011
      const p = progressRef.current

      // Sphere: organic noise morphing, fades out
      sphereMat.opacity = 0.55 * (1 - smoothstep(0, 0.55, p))
      const noiseDecay = 1 - smoothstep(0.1, 0.5, p)
      const sPos = sphereGeo.attributes.position.array as Float32Array
      for (let i = 0; i < sPos.length; i += 3) {
        const ox = originalPositions[i], oy = originalPositions[i + 1], oz = originalPositions[i + 2]
        const len = Math.sqrt(ox * ox + oy * oy + oz * oz)
        const noise =
          Math.sin(ox * 3 + t * 0.7) *
          Math.cos(oy * 3 + t * 0.5) *
          Math.sin(oz * 2 + t * 0.9)
        const disp = noise * p * 0.55 * noiseDecay
        sPos[i]     = ox + (ox / len) * disp
        sPos[i + 1] = oy + (oy / len) * disp
        sPos[i + 2] = oz + (oz / len) * disp
      }
      sphereGeo.attributes.position.needsUpdate = true

      // Blockchain nodes: lerp from sphere toward expanded positions, fade in
      nodeMat.opacity = 0.85 * smoothstep(0.2, 0.7, p)
      const nPos = nodeGeo.attributes.position.array as Float32Array
      for (let i = 0; i < nPos.length; i += 3) {
        const ox = originalPositions[i], oy = originalPositions[i + 1], oz = originalPositions[i + 2]
        nPos[i]     = ox + (targetPositions[i]     - ox) * p
        nPos[i + 1] = oy + (targetPositions[i + 1] - oy) * p
        nPos[i + 2] = oz + (targetPositions[i + 2] - oz) * p
      }
      nodeGeo.attributes.position.needsUpdate = true

      // Blockchain connections: follow nodes, crystallize late
      lineMat.opacity = 0.22 * smoothstep(0.5, 0.92, p)
      for (let k = 0; k < pairs.length; k++) {
        const ai = pairs[k][0], bi = pairs[k][1]
        lineBuf[k * 6]     = nPos[ai * 3];     lineBuf[k * 6 + 1] = nPos[ai * 3 + 1]; lineBuf[k * 6 + 2] = nPos[ai * 3 + 2]
        lineBuf[k * 6 + 3] = nPos[bi * 3];     lineBuf[k * 6 + 4] = nPos[bi * 3 + 1]; lineBuf[k * 6 + 5] = nPos[bi * 3 + 2]
      }
      lineGeo.attributes.position.needsUpdate = true

      // Rotation slows as blockchain crystallizes
      const rot = t * (1 - smoothstep(0.6, 1, p) * 0.6)
      sphereMesh.rotation.x  = nodePoints.rotation.x  = blockchainLines.rotation.x  = rot * 0.07
      sphereMesh.rotation.y  = nodePoints.rotation.y  = blockchainLines.rotation.y  = rot * 0.11

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      renderer.dispose()
      sphereGeo.dispose(); sphereMat.dispose()
      nodeGeo.dispose(); nodeMat.dispose()
      lineGeo.dispose(); lineMat.dispose()
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ height: '400vh' }}>
      {/* Sticky full-viewport frame */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>

        {/* Three.js canvas — fills the sticky frame */}
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />

        {/* Gradient: left-side darkening for text legibility */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(108deg, rgba(4,4,10,0.75) 0%, rgba(4,4,10,0.3) 52%, transparent 100%)',
        }} />

        {/* ── Hero content (fades out as blockchain forms) ── */}
        <div
          ref={heroRef}
          className="absolute inset-0 flex flex-col justify-between px-12 py-20"
          style={{ zIndex: 1, transition: 'opacity 200ms linear' }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[9px] tracking-[5px] text-[var(--label)] uppercase max-w-[1200px] mx-auto w-full"
          >
            DIGITAL ENGINEERING STUDIO · COLOMBIA → WORLD
          </motion.div>

          {/* Headline */}
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(56px,8vw,110px)] font-black leading-[0.93] tracking-[-4px] text-white"
            >
              We Build<br />
              Infrastructure<br />
              <span className="text-[var(--dim)]">That Lasts.</span>
            </motion.h1>
          </div>

          {/* Subtext + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[1200px] mx-auto w-full flex items-end justify-between"
          >
            <p className="text-[15px] text-[var(--muted)] leading-[1.75] max-w-[360px] m-0 opacity-60">
              AI · Web3 · Cloud · Software Development<br />
              Senior-led. Remote-first. Colombia.
            </p>
            <div className="flex flex-col items-end gap-3">
              <button
                onClick={() => window.open(CALENDLY_URL, '_blank')}
                className="bg-white text-black font-bold text-[12px] tracking-[2px] px-10 py-3.5 hover:bg-[rgba(255,255,255,0.85)] transition-colors cursor-pointer"
              >
                START A PROJECT
              </button>
              <Link
                href="/projects"
                className="text-[12px] text-[var(--dim)] hover:text-white transition-colors no-underline tracking-[1px]"
              >
                View our work →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll phrases + progress bar (always visible at bottom) ── */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-12 pb-10 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <div className="max-w-[1200px] mx-auto w-full">
            <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 14 }}>
              <div
                ref={progressBarRef}
                style={{ height: '100%', background: '#fff', width: '0%', transition: 'width 80ms linear' }}
              />
            </div>
            <p
              ref={phraseRef}
              className="m-0 text-[15px] leading-[1.65] max-w-[440px]"
              style={{ color: 'rgba(255,255,255,0.38)', fontFamily: 'var(--font-geist-sans)' }}
            >
              {PHRASES[0]}
            </p>
            <div
              className="font-mono text-[9px] tracking-[4px] mt-2"
              style={{ color: 'rgba(255,255,255,0.1)' }}
            >
              ↓ SCROLL TO EXPLORE
            </div>
          </div>
        </div>

        {/* Bottom fade — blends into the sections below */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '18vh',
          background: 'linear-gradient(to bottom, transparent, var(--bg))',
          pointerEvents: 'none',
          zIndex: 2,
        }} />
      </div>
    </section>
  )
}
