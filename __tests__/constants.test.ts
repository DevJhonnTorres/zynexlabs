import { SERVICES, PROJECTS, STACK_GROUPS, NAV_LINKS } from '@/lib/constants'

describe('SERVICES', () => {
  it('has exactly 5 services', () => expect(SERVICES).toHaveLength(5))
  it('each service has required fields', () => {
    SERVICES.forEach(s => {
      expect(s).toHaveProperty('num')
      expect(s).toHaveProperty('icon')
      expect(s).toHaveProperty('title')
      expect(s.items).toBeInstanceOf(Array)
      expect(s.items.length).toBeGreaterThan(0)
    })
  })
})

describe('PROJECTS', () => {
  it('has exactly 4 projects', () => expect(PROJECTS).toHaveLength(4))
  it('each project has required fields', () => {
    PROJECTS.forEach(p => {
      expect(p).toHaveProperty('vertical')
      expect(p).toHaveProperty('hash')
      expect(p).toHaveProperty('title')
      expect(p).toHaveProperty('description')
      expect(p.tech).toBeInstanceOf(Array)
    })
  })
})

describe('STACK_GROUPS', () => {
  it('has exactly 5 groups', () => expect(STACK_GROUPS).toHaveLength(5))
  it('each group has title and items', () => {
    STACK_GROUPS.forEach(g => {
      expect(g).toHaveProperty('title')
      expect(g.items).toBeInstanceOf(Array)
    })
  })
})

describe('NAV_LINKS', () => {
  it('has at least 4 links', () => expect(NAV_LINKS.length).toBeGreaterThanOrEqual(4))
  it('each link has label and href', () => {
    NAV_LINKS.forEach(l => {
      expect(l).toHaveProperty('label')
      expect(l).toHaveProperty('href')
    })
  })
})
