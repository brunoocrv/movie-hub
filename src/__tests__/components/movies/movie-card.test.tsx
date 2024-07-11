import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Movie } from '@/__types__/movies'
import { MovieCard } from '@/components/movies/movie-card'

const movie: Movie = {
  id: 1,
  title: 'Movie title',
  poster_path: '/path/to/image',
  release_date: '2021-01-01',
  vote_average: 10,
}

describe('movie card component', () => {
  beforeEach(() => {
    render(<MovieCard {...movie} />)
  })
  it('should render the movie card component', () => {
    expect(screen.getByTestId('movie-card')).toBeDefined()
    expect(screen.getByText('Movie title')).toBeDefined()
  })

  it('should to open dialog to show details', () => {
    fireEvent.click(screen.getByTestId('movie-card'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
