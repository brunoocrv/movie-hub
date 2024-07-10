// @vitest-environment node

import { GET } from '@/app/api/movies/search-movie/route'
import { describe, expect, it } from 'vitest'

describe('search movie request', async () => {
  it('should search movie request', async () => {
    const request = new Request(
      'https://api.themoviedb.org/3/search/movie?query=fast',
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    )
    const res = await GET(request).then((res) => ({
      status: res.status,
      body: res.json().then((body) => body.results.slice(0, 1)),
    }))

    expect(res.status).toBe(200)
    expect(await res.body).toBeDefined()
    expect(await res.body).toHaveLength(1)
  })
})
