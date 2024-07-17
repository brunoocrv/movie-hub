import { Movie } from '@/__types__/movies'
import { ResponseError } from '@/http/errors/response-error'

export async function fetchPopularMoviesService() {
  try {
    const popularMovies = await fetch(
      'https://api.themoviedb.org/3/movie/popular',
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    ).then((res) => res.json())

    return { results: popularMovies.results as Array<Movie> }
  } catch (error) {
    if (error instanceof ResponseError) {
      return { message: error.message, status: error.response.status }
    }
  }
}
