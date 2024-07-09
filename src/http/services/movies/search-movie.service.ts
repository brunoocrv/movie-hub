'use server'

import { Movie } from '@/__types__/movies'

export async function searchMovieService(value: string): Promise<{
  results: Movie[]
}> {
  return await fetch(
    `${process.env.HOST}/api/movies/search-movie?query=${value}`,
    {
      method: 'GET',
    },
  ).then((res) => res.json())
}
