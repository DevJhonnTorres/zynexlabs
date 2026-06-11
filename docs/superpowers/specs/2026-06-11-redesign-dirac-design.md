# Zynex Labs — Rediseño Visual (Dirac-Inspired)

**Fecha:** 2026-06-11  
**Estado:** Aprobado para implementación

---

## Resumen

Rediseño completo de la identidad visual de Zynex Labs inspirado en [dirac.com](https://www.dirac.com/). El objetivo es reemplazar la estética cyberpunk/neon actual por un diseño ultra-minimal dark de máxima precisión y credibilidad técnica.

---

## Decisiones de diseño (confirmadas por el usuario)

| Decisión | Actual | Nuevo |
|---|---|---|
| Dirección visual | Cyberpunk / neon / terminal | Ultra Minimal Dark (Dirac-style) |
| Paleta | Negro + naranja #FF6A00 | Negro profundo + blanco puro (B&W) |
| Acento de color | #FF6A00 naranja | Ninguno — solo blanco/grises |
| Tipografía | System font / Inter | **Geist** (ya instalada como local font) |
| Hero layout | Texto izquierda + HeroCanvas 3D | Solo tipografía full-screen |
| Feature central | HeroCanvas Three.js estático | **Scroll-driven Three.js 3D** |

---

## Tokens de color

```css
--bg:        #04040a   /* negro profundo — fondo base */
--surface:   rgba(255,255,255,0.02)  /* superficies de cards */
--border:    rgba(255,255,255,0.07)  /* bordes sutiles */
--text:      #ffffff   /* texto principal */
--muted:     rgba(255,255,255,0.30)  /* texto secundario */
--dim:       rgba(255,255,255,0.12)  /* texto terciario / labels */
--label:     rgba(255,255,255,0.18)  /* eyebrows / números de sección */
```

Sin variable de acento. El blanco puro `#ffffff` hace el trabajo de énfasis cuando se necesita.

---

## Tipografía

- **Fuente:** Geist (ya presente en `/app/fonts/GeistVF.woff`)
- **Pesos usados:** 400 (body/muted), 700 (títulos secundarios), 900 (headlines)
- **Headlines:** `font-weight: 900`, `letter-spacing: -3px a -4px`, `line-height: 0.93–1.0`
- **Labels / eyebrows:** `font-family: monospace` (Geist Mono, ya en `/app/fonts/GeistMonoVF.woff`), `font-size: 9–10px`, `letter-spacing: 4–5px`, mayúsculas
- **Body:** `font-size: 14–16px`, `line-height: 1.75`, `color: var(--muted)`

---

## Estructura de páginas

### Componentes globales

**Navbar** (`components/layout/Navbar.tsx`)
- Logo: `ZYNEX LABS` en Geist 700, letter-spacing 4px, blanco
- Links: Services · Work · About — color `var(--dim)`, hover `var(--text)`
- CTA: "Contact" con `border: 1px solid rgba(255,255,255,0.2)`, padding `5px 14px`
- Al hacer scroll: `backdrop-filter: blur(12px)`, `background: rgba(4,4,10,0.85)`
- Sin borde inferior permanente — aparece solo al hacer scroll

**Footer** (`components/layout/Footer.tsx`)
- Mínimo: logo + links + copyright
- `border-top: 1px solid var(--border)`
- Sin gradientes ni decoración

---

### Home page (`app/page.tsx`)

#### Sección 1 — Hero
- `min-height: 100vh`, flex column, justify-content: space-between
- **Eyebrow:** `DIGITAL ENGINEERING STUDIO · COLOMBIA → WORLD` — monospace, 9px, `var(--label)`
- **Headline:** "We Build / Infrastructure / That Lasts." — Geist 900, `clamp(56px, 8vw, 110px)`, letra negativa, la última línea en `var(--dim)`
- **Subtext:** "AI · Web3 · Cloud · Software Development / Senior-led. Remote-first." — 14px, `var(--muted)`
- **CTAs:**
  - Primario: `background: #fff; color: #000` — `START A PROJECT`
  - Ghost: texto `var(--dim)` — `View our work →`
- **Animación de entrada:** Framer Motion, fade + translateY(20px→0), stagger 0.1s entre elementos. Sin glitch, sin neon.
- **Divider final:** `height: 1px; background: var(--border)` — divide del scroll-video

#### Sección 2 — Scroll-Driven 3D Canvas ★ FEATURE PRINCIPAL
- Inspirada directamente en dirac.com
- **Mecanismo:**
  1. Un wrapper `<section>` con `height: 300vh` (suficiente recorrido de scroll)
  2. Dentro, un `<div>` con `position: sticky; top: 0; height: 100vh` que contiene el canvas
  3. `requestAnimationFrame` + `window.addEventListener('scroll', ..., { passive: true })` calculan el progreso: `progress = (scrollY - sectionTop) / (sectionHeight - viewportHeight)` clamped a `[0, 1]`
  4. El progreso se pasa al canvas Three.js que lo usa para avanzar la animación
- **Escena Three.js** (`components/canvas/ScrollCanvas.tsx`):
  - Geometría abstracta (partículas, malla, forma geométrica en rotación/morphing)
  - La escena hace una transformación completa a lo largo del progress 0→1
  - Fondo negro, partículas/líneas blancas (sin color de acento)
  - `THREE.WebGLRenderer` con `alpha: true`, `antialias: true`
- **Overlay de texto dinámico:** 3–4 frases sobre Zynex que hacen crossfade según el progreso
  - 0–25%: "Ingeniería sin compromisos."
  - 25–50%: "Cada sistema construido para sobrevivir cinco años."
  - 50–75%: "Senior-led, remote-first, Colombia al mundo."
  - 75–100%: "AI · Web3 · Cloud — la infraestructura de mañana."
- **Barra de progreso:** línea de 1px en la parte inferior del canvas, `width: {progress * 100}%`, color `#fff`

#### Sección 3 — Services
- Eyebrow: `01 · SERVICES` monospace, `var(--label)`
- Header: "What We / Build" — Geist 900, left + link "All services →" right
- Grid: `grid-template-columns: repeat(5, 1fr); gap: 0; background: var(--border)` — efecto de separador 1px entre cards
- Cada card: `background: var(--bg); padding: 24px; border: 1px solid transparent`
- Hover: `border-color: rgba(255,255,255,0.12); background: var(--surface)`
- Contenido: número en mono dim, título en blanco, tagline en muted
- Animación: `AnimatedSection` existente con fade+slide, delay stagger

#### Sección 4 — Projects (2 destacados)
- Eyebrow: `02 · PROJECTS`
- Header: "Selected / Work"
- Grid: `grid-template-columns: 1fr 1fr; gap: 0; background: var(--border)`
- Cards: igual que services pero más padding, muestran vertical, año, título, subtítulo, descripción, tech tags
- Tech tags: `border: 1px solid var(--border); font-family: mono; font-size: 9px`

#### Sección 5 — CTA Final
- Centrado, `padding: 120px 0`
- Eyebrow: `// READY TO BUILD`
- Headline grande: "Transform your vision / into digital infrastructure." — última línea en `var(--dim)`
- Subtext muted
- CTA primario: fondo blanco, texto negro

---

### Otras páginas

`/services`, `/projects`, `/about`, `/contact` heredan el nuevo sistema visual. El componente `PageHeader` se actualiza para usar los nuevos tokens.

---

## Lo que se elimina de `globals.css`

```
- .scanlines
- .scan-beam (@keyframes scan-move)
- .noise (@keyframes noise-shift)
- .vignette
- .glitch-wrap, .glitch-wrap::before/after
- @keyframes glitch-bar-a, glitch-bar-b, glitch-transform
- @keyframes neon-pulse
- .neon
- @keyframes neon-border
- .neon-border
- @keyframes flicker
- .flicker
- .cursor::after (terminal cursor)
- @keyframes gradient-shimmer
```

---

## Lo que se reemplaza

| Componente | Acción |
|---|---|
| `components/canvas/HeroCanvas.tsx` | Renombrar/reescribir como `ScrollCanvas.tsx` con el nuevo mecanismo scroll-driven |
| `globals.css` — tokens CSS | Actualizar variables: eliminar `--orange`, `--orange-dim`, `--orange-low`, `--border-o` |
| Todas las referencias a `#FF6A00` / `rgba(255,106,0,...)` | Reemplazar por blanco o grises según contexto |

---

## Animaciones que se conservan

- `AnimatedSection` (fade + slide) — se mantiene, es limpia
- Transiciones de hover: `transition: all 200ms` — se mantiene

## Animaciones nuevas

- Entrada del hero: Framer Motion stagger (ya disponible)
- Scroll-driven canvas: RAF + scroll listener
- Crossfade del texto en la sección 3D: opacity transitions con CSS

---

## Archivos a modificar

1. `app/globals.css` — limpiar efectos cyberpunk, actualizar tokens
2. `app/layout.tsx` — verificar fuente Geist configurada correctamente
3. `components/layout/Navbar.tsx` — nuevo estilo
4. `components/layout/Footer.tsx` — nuevo estilo
5. `components/sections/Hero.tsx` — nuevo layout full-screen
6. `components/canvas/HeroCanvas.tsx` → `ScrollCanvas.tsx` — reescribir
7. `components/sections/Services.tsx` — nuevo grid con separadores 1px
8. `components/sections/Projects.tsx` — nuevo grid
9. `components/sections/CTAFinal.tsx` — nuevo estilo
10. `app/page.tsx` — integrar ScrollCanvas como sección sticky
11. Resto de secciones (`About`, `Vision`, `Methodology`, `Stack`, `Ticker`) — purgar naranja/neon

---

## Fuera de scope

- Cambios al contenido (textos, servicios, proyectos) — solo visual
- Nuevas páginas
- Funcionalidad de contacto / Calendly
- SEO / metadata
