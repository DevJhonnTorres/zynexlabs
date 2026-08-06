'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { smoothstep } from '@/lib/scroll-utils'
import { CALENDLY_URL } from '@/lib/constants'

export function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // El 3D corre siempre que el dispositivo pueda crear el renderer real.
    // Si falla (sin WebGL / GPU bloqueada), la página sigue con fondo estático
    // y el hero no se rompe — nunca error de cliente.
    let cleanup: (() => void) | undefined
    try {
      cleanup = initScene(canvas, heroRef, progressRef)
    } catch (err) {
      console.warn('ScrollCanvas: WebGL no disponible, fondo estático', err)
    }
    return () => {
      cleanup?.()
    }
  }, [])

  return (
    <>
      {/* Fixed canvas — background of the entire page */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Fixed gradient — left-side darkening for text legibility */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        background: 'linear-gradient(108deg, rgba(4,4,10,0.75) 0%, rgba(4,4,10,0.3) 52%, transparent 100%)',
      }} />

      {/* Fixed hero overlay — fades out as user scrolls */}
      <div
        ref={heroRef}
        className="fixed inset-0 flex flex-col justify-between px-6 md:px-12 py-10 md:py-20"
        style={{ zIndex: 2, transition: 'opacity 200ms linear' }}
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
          className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-0 justify-between"
        >
          <p className="text-[15px] text-[var(--muted)] leading-[1.75] max-w-none md:max-w-[360px] m-0 opacity-60">
            AI · Web3 · Cloud · Software Development<br />
            Senior-led. Remote-first. Colombia.
          </p>
          <div className="flex flex-col items-start md:items-end gap-3">
            <button
              onClick={() => window.open(CALENDLY_URL, '_blank')}
              className="bg-white text-black font-bold text-[12px] tracking-[2px] px-8 md:px-10 py-3.5 hover:bg-[rgba(255,255,255,0.85)] transition-colors cursor-pointer"
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
    </>
  )
}

function initScene(
  canvas: HTMLCanvasElement,
  heroRef: React.RefObject<HTMLDivElement | null>,
  progressRef: React.MutableRefObject<number>,
): () => void {
  // ── Renderer ──
  const isMobile = window.innerWidth < 768
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2))

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
  const n = targetPositions.length / 3
  const pairs: [number, number][] = []
  const MIN_D2 = 0.09
  const MAX_D2 = 3.24  // 1.8² — nearest neighbors at 2.5x scale
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
    const W = window.innerWidth
    const H = window.innerHeight
    renderer.setSize(W, H)
    camera.aspect = W / H
    camera.updateProjectionMatrix()
  }
  window.addEventListener('resize', onResize)
  onResize()

  // ── Scroll: progress based on first 3 viewport heights ──
  function onScroll() {
    progressRef.current = Math.max(0, Math.min(1, window.scrollY / (window.innerHeight * 3)))

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
    window.removeEventListener('resize', onResize)
    renderer.dispose()
    sphereGeo.dispose(); sphereMat.dispose()
    nodeGeo.dispose(); nodeMat.dispose()
    lineGeo.dispose(); lineMat.dispose()
  }
}
