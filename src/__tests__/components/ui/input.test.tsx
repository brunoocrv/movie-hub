import { describe, expect } from 'vitest'

import { Input } from '@/components/ui/input'
import { render } from '@testing-library/react'

describe('Input', () => {
  it('should render an input', () => {
    render(<Input />)

    expect(document.querySelector('input')).toBeDefined()
  })
})
