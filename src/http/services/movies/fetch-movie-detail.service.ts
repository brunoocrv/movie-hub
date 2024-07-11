'use server'

import type { Cast, MovieDetail } from '@/__types__/movies'

export async function fetchMovieDetailService(movieId: number): Promise<{
  movie?: MovieDetail
  cast?: Cast[]
}> {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }).then((res) => res.json())

  const { cast } = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    },
  ).then((res) => res.json())

  return { movie, cast }
}
