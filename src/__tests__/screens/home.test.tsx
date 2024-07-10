import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from '@/app/page'

describe('Home', () => {
  it('should render the home page', async () => {
    const home = Home()
    render(home)

    expect(screen.getByTestId('movie-hub')).toBeDefined()
  })
})
