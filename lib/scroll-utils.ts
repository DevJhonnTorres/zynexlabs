export function calcScrollProgress(
  scrollY: number,
  sectionTop: number,
  sectionHeight: number,
  windowHeight: number,
): number {
  const scrollable = sectionHeight - windowHeight
  const raw = (scrollY - sectionTop) / scrollable
  return Math.max(0, Math.min(1, raw))
}
