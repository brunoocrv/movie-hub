import '@testing-library/jest-dom'
import { describe, expect } from 'vitest'

import { Badge } from '@/components/ui/badge'
import { render, screen } from '@testing-library/react'

describe('Badge', () => {
  it('should render a badge', () => {
    render(<Badge>content</Badge>)

    expect(screen.getByText('content')).toBeDefined()
  })

  it('should render a badge with secondary variant', () => {
    render(<Badge variant="secondary">content</Badge>)

    expect(screen.getByText('content')).toHaveStyle({
      backgroundColor: 'hsl(var(--secondary))',
    })
  })
})
