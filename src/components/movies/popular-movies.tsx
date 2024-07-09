import { fetchPopularMoviesService } from '@/http/services/movies/fetch-popular-movies.service'

import { MovieCard } from './movie-card'

export async function PopularMovies() {
  const popularMovies = await fetchPopularMoviesService()

  return (
    <div className="grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full h-full items-start justify-start">
      {popularMovies.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}
