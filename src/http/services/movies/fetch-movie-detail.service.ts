import type { Cast, MovieDetail } from '@/__types__/movies'

export async function fetchMovieDetailService(
  movieId: number,
): Promise<{ movie: MovieDetail; cast: Cast[] }> {
  return await fetch(
    `${process.env.HOST}/api/movies/movie-detail?movieId=${movieId}`,
    {
      method: 'GET',
    },
  ).then((res) => res.json())
}
