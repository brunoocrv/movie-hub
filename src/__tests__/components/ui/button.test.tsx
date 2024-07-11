import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'

import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('should render a button', () => {
    render(<Button>Click me</Button>)

    expect(screen.getByRole('button')).toBeDefined()
  })

  it('should render a button with secondary variant', () => {
    render(<Button variant="secondary">Click me</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: 'hsl(var(--secondary))',
    })
  })
})
