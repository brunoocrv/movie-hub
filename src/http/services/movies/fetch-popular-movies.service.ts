import { Movie } from '@/__types__/movies'

export async function fetchPopularMoviesService(): Promise<{
  results: Movie[]
}> {
  return await fetch(`${process.env.HOST}/api/movies/popular-movies`, {
    method: 'GET',
  }).then((res) => {
    return res.json()
  })
}
