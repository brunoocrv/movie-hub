import { fetchUpcomingMoviesService } from '@/http/services/movies/fetch-upcoming-movies.service'
import { toast } from '../ui/use-toast'
import { MovieCard } from './movie-card'

export async function UpcomingMovies() {
  const upcomingMovies = await fetchUpcomingMoviesService()
    .then((res) => res.results)
    .catch((error) => {
      toast({
        title: 'Failed to fetch upcoming movies',
        description: error.message,
      })
    })

  return (
    <div className="grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full h-full items-start justify-start">
      {!!upcomingMovies &&
        upcomingMovies?.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </div>
  )
}
