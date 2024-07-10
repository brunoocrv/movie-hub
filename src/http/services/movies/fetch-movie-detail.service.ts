import type { Cast, MovieDetail } from '@/__types__/movies'

export async function fetchMovieDetailService(movieId: number): Promise<{
  movie?: MovieDetail
  cast?: Cast[]
}> {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }).then((res) => res.json())

  const { cast } = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      method: 'GET',
      headers: {
        Authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjA0MDRkZTBlNWU1Y2JlMzFhZWViNjRkZjc3NjRmYiIsIm5iZiI6MTcyMDQ2MzkwMC4yNDkyOTUsInN1YiI6IjY2OGMwNTk4ZDNiZmI5NTMyZDBiMWRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7sqAGxcgW2dZneMW_em5YjVXrxZlac-4sOir9LFo2aU`,
      },
    },
  ).then((res) => res.json())

  return { movie, cast }
}
