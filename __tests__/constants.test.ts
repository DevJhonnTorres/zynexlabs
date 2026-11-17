import { SERVICES, PROJECTS, STACK_GROUPS, NAV_LINKS, APPS } from '@/lib/constants'

describe('SERVICES', () => {
  it('has exactly 5 services', () => expect(SERVICES).toHaveLength(5))
  it('each service has required fields', () => {
    SERVICES.forEach(s => {
      expect(s).toHaveProperty('num')
      expect(s).toHaveProperty('icon')
      expect(s).toHaveProperty('slug')
      expect(s).toHaveProperty('title')
      expect(s).toHaveProperty('tagline')
      expect(s).toHaveProperty('description')
      expect(s.items).toBeInstanceOf(Array)
      expect(s.items.length).toBeGreaterThan(0)
      expect(s.tech).toBeInstanceOf(Array)
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
      expect(p).toHaveProperty('subtitle')
      expect(p).toHaveProperty('description')
      expect(p).toHaveProperty('challenge')
      expect(p).toHaveProperty('outcome')
      expect(p.tech).toBeInstanceOf(Array)
      expect(p).toHaveProperty('year')
      expect(p).toHaveProperty('status')
    })
  })
})

describe('STACK_GROUPS', () => {
  it('has exactly 5 groups', () => expect(STACK_GROUPS).toHaveLength(5))
  it('each group has title and string items', () => {
    STACK_GROUPS.forEach(g => {
      expect(g).toHaveProperty('title')
      expect(g.items).toBeInstanceOf(Array)
      expect(g.items.length).toBeGreaterThan(0)
      g.items.forEach(item => expect(typeof item).toBe('string'))
    })
  })
})

describe('NAV_LINKS', () => {
  it('has exactly 4 links', () => expect(NAV_LINKS).toHaveLength(4))
  it('each link points to a page route', () => {
    NAV_LINKS.forEach(l => {
      expect(l).toHaveProperty('label')
      expect(l).toHaveProperty('href')
      expect(l.href.startsWith('/')).toBe(true)
    })
  })
})

describe('APPS', () => {
  it('has 10 apps', () => expect(APPS).toHaveLength(10))
  it('all urls are https', () => {
    APPS.forEach(a => expect(a.url.startsWith('https://')).toBe(true))
  })
  it('slugs are unique', () => {
    expect(new Set(APPS.map(a => a.slug)).size).toBe(APPS.length)
  })
  it('has 6 featured apps', () => expect(APPS.filter(a => a.featured)).toHaveLength(6))
})

describe('NAV_LINKS order', () => {
  it('includes Apps after Services', () => {
    expect(NAV_LINKS.map(l => l.label)).toEqual(['Services', 'Apps', 'Projects', 'About'])
  })
})
