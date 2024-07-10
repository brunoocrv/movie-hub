// @vitest-environment node

import { describe, expect, it } from 'vitest'

import { GET } from '@/app/api/movies/popular-movies/route'

describe('fetch popular movies', async () => {
  it('should fetch popular movies', async () => {})
  const res = await GET()

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
})
