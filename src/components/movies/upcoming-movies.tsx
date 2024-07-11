import { fetchUpcomingMoviesService } from '@/http/services/movies/fetch-upcoming-movies.service'
import { MovieCard } from './movie-card'

export async function UpcomingMovies() {
  const upcomingMovies = await fetchUpcomingMoviesService()
  return (
    <div className="grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full h-full items-start justify-start">
      {upcomingMovies.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}
