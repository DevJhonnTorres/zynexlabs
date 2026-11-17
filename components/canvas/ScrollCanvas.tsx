'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { smoothstep } from '@/lib/scroll-utils'
import { APPS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // El 3D corre siempre que el dispositivo pueda crear el renderer real.
    // Si falla (sin WebGL / GPU bloqueada), la página sigue con fondo estático
    // y el hero no se rompe — nunca error de cliente.
    let cleanup: (() => void) | undefined
    try {
      cleanup = initScene(canvas, heroRef, gradientRef, progressRef)
    } catch (err) {
      // Sin WebGL: el mundo 2D (Canvas 2D) corre en CUALQUIER dispositivo —
      // esfera wireframe blanca rotando, misma estética que el 3D.
      console.warn('ScrollCanvas: WebGL no disponible, usando mundo 2D', err)
      cleanup = init2DWorld(canvas, heroRef, gradientRef, progressRef)
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
          transition: 'opacity 200ms linear',
        }}
      />

      {/* Fixed gradient — left-side darkening for text legibility */}
      <div
        ref={gradientRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'opacity 200ms linear',
          background: 'linear-gradient(108deg, rgba(7,7,10,0.8) 0%, rgba(7,7,10,0.35) 52%, transparent 100%)',
        }}
      />

      {/* Fixed hero overlay — fades out as user scrolls */}
      <div
        ref={heroRef}
        className="fixed inset-0 flex flex-col justify-between overflow-y-auto px-5 pb-8 pt-24 md:px-12 md:pb-12 md:pt-28"
        style={{ zIndex: 2, transition: 'opacity 200ms linear' }}
      >
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(255,106,0,0.35)] bg-[var(--accent-soft)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[1.5px] text-accent-2 md:text-[12px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Digital engineering studio · Colombia → World
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(48px,9vw,120px)] font-black leading-[0.95] tracking-[-0.04em] text-white"
          >
            Trust,<br />
            <span className="text-gradient-accent">Engineered.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[var(--muted)] md:text-[18px]"
          >
            AI, Web3, cloud and custom software. Senior-led, remote-first, and already running in production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact" size="lg">Book a free call</Button>
            <Button href="/apps" variant="secondary" size="lg">See live apps</Button>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 grid w-full max-w-[1200px] grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--border)] pt-6 md:grid-cols-4"
        >
          {[
            { value: '27+', label: 'Public Repos' },
            { value: String(APPS.length), label: 'Live Apps' },
            { value: '5', label: 'Service Lines' },
            { value: '24/7', label: 'Ops' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-[28px] font-black leading-none tracking-[-1px] text-white md:text-[34px]">{stat.value}</div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[1.5px] text-[var(--label)] md:text-[12px]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

function initScene(
  canvas: HTMLCanvasElement,
  heroRef: React.RefObject<HTMLDivElement | null>,
  gradientRef: React.RefObject<HTMLDivElement | null>,
  progressRef: React.MutableRefObject<number>,
): () => void {
  // ── Renderer ──
  const isMobile = window.innerWidth < 768
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile })
  renderer.setClearColor(0x000000, 1)
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
    color: 0xff8a3d,
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
  const lineMat = new THREE.LineBasicMaterial({ color: 0xff6a00, transparent: true, opacity: 0 })
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
    // El mundo también se desvanece con el scroll (nunca visible al final)
    const fade = 1 - smoothstep(0.3, 1, progressRef.current)
    canvas.style.opacity = String(fade)
    if (gradientRef.current) gradientRef.current.style.opacity = String(fade)
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

// ── Mundo 2D de respaldo ──
// Esfera wireframe blanca rotando, dibujada con Canvas 2D (proyección manual).
// Corre en CUALQUIER dispositivo, con o sin WebGL — misma estética que el 3D.
function init2DWorld(
  canvas: HTMLCanvasElement,
  heroRef: React.RefObject<HTMLDivElement | null>,
  gradientRef: React.RefObject<HTMLDivElement | null>,
  progressRef: React.MutableRefObject<number>,
): () => void {
  const ctx = canvas.getContext('2d')!
  if (!ctx) return () => {}

  // Icosaedro: 12 vértices normalizados (radio 1)
  const phi = (1 + Math.sqrt(5)) / 2
  const raw: [number, number, number][] = [
    [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
    [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
    [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1],
  ]
  const verts = raw.map(([x, y, z]) => {
    const len = Math.sqrt(x * x + y * y + z * z)
    return [x / len, y / len, z / len] as [number, number, number]
  })
  // Aristas del icosaedro unitario (longitud ≈ 1.051)
  const edges: [number, number][] = []
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const dx = verts[i][0] - verts[j][0]
      const dy = verts[i][1] - verts[j][1]
      const dz = verts[i][2] - verts[j][2]
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
      if (d > 1.0 && d < 1.12) edges.push([i, j])
    }
  }

  const RADIUS = 1.5
  let animId = 0
  let t = 0

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  window.addEventListener('resize', resize)
  resize()

  // Progress del scroll (igual que el 3D) — necesario para el fade
  function onScroll() {
    progressRef.current = Math.max(0, Math.min(1, window.scrollY / (window.innerHeight * 3)))
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  function draw() {
    animId = requestAnimationFrame(draw)
    t += 0.011
    const p = progressRef.current
    const W = window.innerWidth
    const H = window.innerHeight
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, W, H)

    // Rotación: eje Y lento + eje X
    const ry = t * 0.11
    const rx = t * 0.07
    const cosY = Math.cos(ry), sinY = Math.sin(ry)
    const cosX = Math.cos(rx), sinX = Math.sin(rx)

    const fade = 0.55 * (1 - smoothstep(0, 0.55, p))
    ctx.strokeStyle = `rgba(255,255,255,${Math.max(fade, 0.02).toFixed(3)})`
    ctx.lineWidth = 1

    // Proyección perspectiva simple
    const base = Math.min(W, H) * 0.32 / RADIUS
    const cx = W / 2
    const cy = H / 2
    const proj = verts.map(([x, y, z]) => {
      const x1 = x * cosY + z * sinY
      const z1 = -x * sinY + z * cosY
      const y1 = y * cosX - z1 * sinX
      const z2 = y * sinX + z1 * cosX
      const s = base * (1 + z2 * 0.08)
      return { x: cx + x1 * RADIUS * s, y: cy + y1 * RADIUS * s }
    })

    ctx.beginPath()
    for (const [a, b] of edges) {
      ctx.moveTo(proj[a].x, proj[a].y)
      ctx.lineTo(proj[b].x, proj[b].y)
    }
    ctx.stroke()

    // Fade del hero con el scroll (igual que el 3D)
    if (heroRef.current) {
      const opacity = 1 - smoothstep(0.05, 0.38, p)
      heroRef.current.style.opacity = String(opacity)
      heroRef.current.style.pointerEvents = opacity < 0.08 ? 'none' : 'auto'
    }
    // El mundo se desvanece con el scroll
    const canvasFade = 1 - smoothstep(0.3, 1, p)
    canvas.style.opacity = String(canvasFade)
    if (gradientRef.current) gradientRef.current.style.opacity = String(canvasFade)
  }
  draw()

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll', onScroll)
  }
}
