// @vitest-environment node

import { describe, expect, it, vi } from 'vitest'

import { mockedMovies } from '@/__tests__/utils/movie-mocks'
import { fetchUpcomingMoviesService } from '@/http/services/movies/fetch-upcoming-movies.service'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: mockedMovies }),
    ok: true,
    status: 200,
  } as Response),
)

describe('fetch upcoming movies', () => {
  it('should fetch upcoming movies', async () => {
    const result = await fetchUpcomingMoviesService()
    expect(result?.results).toEqual(mockedMovies)
  })
})
