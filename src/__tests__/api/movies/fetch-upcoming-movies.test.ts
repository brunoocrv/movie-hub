// @vitest-environment node

import { describe, expect, it } from 'vitest'

import { GET } from '@/app/api/movies/upcoming-movies/route'

describe('fetch upcoming movies', async () => {
  it('should fetch upcoming movies', async () => {})
  const res = await GET()

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
})
