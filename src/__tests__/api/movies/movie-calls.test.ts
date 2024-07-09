import { describe, expect, it } from 'vitest'

import { GET } from '@/app/api/movies/popular-movies/route'

describe('GET /api/home/movies', async () => {
  it('should return popular movies', async () => {
    const res = await GET()

    expect(res.status).toBe(200)
    expect(res.body).toBeDefined()
  })
})
