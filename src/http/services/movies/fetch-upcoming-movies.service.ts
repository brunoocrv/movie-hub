import { Movie } from '@/__types__/movies'
import { ResponseError } from '@/http/errors/response-error'

export async function fetchUpcomingMoviesService() {
  try {
    const topRatedMovies = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming',
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    ).then((res) => res.json())

    return { results: topRatedMovies.results as Array<Movie>, status: 200 }
  } catch (error) {
    if (error instanceof ResponseError) {
      return { message: error.message, status: error.response.status }
    }
  }
}
