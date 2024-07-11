// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'

import { mockedMovies } from '@/__tests__/utils/movie-mocks'
import { fetchPopularMoviesService } from '@/http/services/movies/fetch-popular-movies.service'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedMovies),
    ok: true,
    status: 200,
  } as Response),
)

describe('fetch popular movies', () => {
  it('should fetch popular movies', async () => {
    const result = await fetchPopularMoviesService()
    expect(result).toEqual(mockedMovies)

    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.HOST}/api/movies/popular-movies`,
      {
        method: 'GET',
      },
    )
  })
})
