import { SearchMovie } from '@/components/movies/search-movie'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

describe('search movie component', () => {
  beforeEach(() => {
    const component = <SearchMovie />

    render(component)
  })

  it('should render the search movie component', () => {
    expect(screen.getByTestId('search-input')).toBeDefined()
    expect(screen.getByTestId('search-button')).toBeDefined()
  })
})
