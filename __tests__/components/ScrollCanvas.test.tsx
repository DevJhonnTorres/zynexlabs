import React from 'react'
import { render } from '@testing-library/react'

// Mock Three.js — WebGL is not available in jsdom
jest.mock('three', () => {
  const makeGeo = () => ({
    attributes: {
      position: {
        array: new Float32Array(300),
        needsUpdate: false,
      },
    },
    setAttribute: jest.fn(),
    dispose: jest.fn(),
  })
  const mockGeo = makeGeo()
  return {
    WebGLRenderer: jest.fn().mockImplementation(() => ({
      setPixelRatio: jest.fn(),
      setSize: jest.fn(),
      render: jest.fn(),
      dispose: jest.fn(),
    })),
    PerspectiveCamera: jest.fn().mockImplementation(() => ({
      position: { z: 0 },
      aspect: 1,
      updateProjectionMatrix: jest.fn(),
    })),
    Scene: jest.fn().mockImplementation(() => ({ add: jest.fn() })),
    IcosahedronGeometry: jest.fn().mockImplementation(() => mockGeo),
    MeshBasicMaterial: jest.fn().mockImplementation(() => ({ opacity: 1, dispose: jest.fn() })),
    Mesh: jest.fn().mockImplementation(() => ({
      rotation: { x: 0, y: 0 },
      geometry: mockGeo,
    })),
    BufferGeometry: jest.fn().mockImplementation(() => makeGeo()),
    BufferAttribute: jest.fn().mockImplementation((arr: Float32Array, _itemSize: number) => ({ array: arr })),
    PointsMaterial: jest.fn().mockImplementation(() => ({ opacity: 0, dispose: jest.fn() })),
    Points: jest.fn().mockImplementation(() => ({ rotation: { x: 0, y: 0 } })),
    LineBasicMaterial: jest.fn().mockImplementation(() => ({ opacity: 0, dispose: jest.fn() })),
    LineSegments: jest.fn().mockImplementation(() => ({ rotation: { x: 0, y: 0 } })),
  }
})

import { ScrollCanvas } from '@/components/canvas/ScrollCanvas'

describe('ScrollCanvas', () => {
  it('renders a canvas element', () => {
    const { container } = render(<ScrollCanvas />)
    expect(container.querySelector('canvas')).not.toBeNull()
  })

  it('renders the hero headline, CTAs and stats', () => {
    const { getByText, getAllByRole } = render(<ScrollCanvas />)
    expect(getByText('Engineered.')).toBeTruthy()
    const hrefs = getAllByRole('link').map(l => l.getAttribute('href'))
    expect(hrefs).toEqual(expect.arrayContaining(['/contact', '/apps']))
    expect(getByText('Live Apps')).toBeTruthy()
  })
})
