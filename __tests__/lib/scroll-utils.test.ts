import { calcScrollProgress } from '@/lib/scroll-utils'

describe('calcScrollProgress', () => {
  it('returns 0 when scroll is at section top', () => {
    expect(calcScrollProgress(0, 0, 3000, 1000)).toBe(0)
  })

  it('returns 1 when scroll is at section bottom', () => {
    expect(calcScrollProgress(2000, 0, 3000, 1000)).toBe(1)
  })

  it('returns 0.5 at midpoint', () => {
    expect(calcScrollProgress(1000, 0, 3000, 1000)).toBe(0.5)
  })

  it('clamps below 0 when above the section', () => {
    expect(calcScrollProgress(-100, 0, 3000, 1000)).toBe(0)
  })

  it('clamps above 1 when past the section', () => {
    expect(calcScrollProgress(5000, 0, 3000, 1000)).toBe(1)
  })

  it('handles a section that starts at a non-zero offset', () => {
    // section starts at scrollY=500, height=3000, viewport=1000
    // scrollable range: 500 to 2500 (3000 - 1000 = 2000 units)
    expect(calcScrollProgress(500, 500, 3000, 1000)).toBe(0)
    expect(calcScrollProgress(1500, 500, 3000, 1000)).toBe(0.5)
    expect(calcScrollProgress(2500, 500, 3000, 1000)).toBe(1)
  })
})
