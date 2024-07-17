// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'

import { mockedMovies } from '@/__tests__/utils/movie-mocks'
import { searchMovieService } from '@/http/services/movies/search-movie.service'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: mockedMovies }),
    ok: true,
    status: 200,
  } as Response),
)

describe('search movie request', () => {
  it('should search movie request', async () => {
    const query = 'batman'

    const result = await searchMovieService(query)

    expect(result?.results).toEqual(mockedMovies)
  })
})
