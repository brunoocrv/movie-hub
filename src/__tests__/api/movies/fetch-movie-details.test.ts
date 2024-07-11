// @vitest-environment node
import { describe, expect, vi } from 'vitest'

import { mockedCast, mockedMovieDetail } from '@/__tests__/utils/movie-mocks'
import { fetchMovieDetailService } from '@/http/services/movies/fetch-movie-detail.service'

global.fetch = vi.fn((url) =>
  Promise.resolve({
    json: () => {
      if (url.includes('/credits')) {
        return Promise.resolve({ cast: mockedCast })
      }
      return Promise.resolve(mockedMovieDetail)
    },
    ok: true,
    status: 200,
  } as Response),
)

describe('fetch movie details', () => {
  it('should fetch movie details', async () => {
    const result = await fetchMovieDetailService(1)
    expect(result).toEqual({
      movie: mockedMovieDetail,
      cast: mockedCast,
    })
  })
})
