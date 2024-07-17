'use server'

import type { Cast, MovieDetail } from '@/__types__/movies'
import { ResponseError } from '@/http/errors/response-error'

export async function fetchMovieDetailService(movieId: number) {
  try {
    const movie: MovieDetail = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    ).then((res) => res.json())

    const { cast }: { cast: Array<Cast> } = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    ).then((res) => res.json())

    return { movie, cast }
  } catch (error) {
    if (error instanceof ResponseError) {
      return { message: error.message, status: error.response.status }
    }
  }
}
