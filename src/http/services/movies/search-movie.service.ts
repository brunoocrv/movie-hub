'use server'

import { Movie } from '@/__types__/movies'
import { ResponseError } from '@/http/errors/response-error'

export async function searchMovieService(value: string) {
  try {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value?.replace(' ', '+')}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    ).then((res) => res.json())

    return { results: results.slice(0, 20) as Array<Movie>, status: 200 }
  } catch (error) {
    if (error instanceof ResponseError) {
      return { message: error.message, status: error.response.status }
    }
  }
}
