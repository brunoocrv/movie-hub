import { Movie } from '@/__types__/movies'

export async function fetchUpcomingMoviesService(): Promise<{
  results: Movie[]
}> {
  return await fetch(`${process.env.HOST}/api/movies/upcoming-movies`, {
    method: 'GET',
  }).then((res) => res.json())
}
