import { Movie } from '@/__types__/movies'
import { MovieCard } from '@/components/movies/movie-card'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

const movie: Movie = {
  id: 1,
  title: 'Movie title',
  poster_path: 'movie-poster.jpg',
  release_date: '2022-01-01',
  vote_average: 7.5,
}

describe('MovieCard component', () => {
  it('Should render movie card', () => {
    render(<MovieCard {...movie} />)

    expect(screen.getByText(/movie title/i)).toBeDefined()
    expect(screen.getByText(/release date/i)).toBeDefined()
    expect(screen.getByText(/7.5/i)).toBeDefined()
  })
})
