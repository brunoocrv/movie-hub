import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'

import { Skeleton } from '@/components/ui/skeleton'

describe('Skeleton', () => {
  it('should render a skeleton', () => {
    render(<Skeleton data-testid="skeleton" />)

    expect(screen.getByTestId('skeleton')).toBeDefined()
  })
})
