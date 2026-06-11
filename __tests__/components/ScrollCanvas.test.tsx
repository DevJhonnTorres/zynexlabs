import React from 'react'
import { render } from '@testing-library/react'

// Mock Three.js — WebGL is not available in jsdom
jest.mock('three', () => {
  const mockGeo = {
    attributes: {
      position: {
        array: new Float32Array(300),
        needsUpdate: false,
      },
    },
    dispose: jest.fn(),
  }
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
    MeshBasicMaterial: jest.fn().mockImplementation(() => ({ dispose: jest.fn() })),
    Mesh: jest.fn().mockImplementation(() => ({
      rotation: { x: 0, y: 0 },
      geometry: mockGeo,
    })),
  }
})

import { ScrollCanvas } from '@/components/canvas/ScrollCanvas'

describe('ScrollCanvas', () => {
  it('renders a section with a canvas element', () => {
    const { container } = render(<ScrollCanvas />)
    expect(container.querySelector('canvas')).not.toBeNull()
    expect(container.querySelector('section')).not.toBeNull()
  })

  it('renders all 4 scroll phrases in the DOM', () => {
    const { getAllByText } = render(<ScrollCanvas />)
    // First phrase is visible initially
    expect(getAllByText('Engineering without compromise.').length).toBeGreaterThan(0)
  })
})
