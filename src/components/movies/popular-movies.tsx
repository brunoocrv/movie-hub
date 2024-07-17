import { fetchPopularMoviesService } from '@/http/services/movies/fetch-popular-movies.service'

import { Movie } from '@/__types__/movies'
import { toast } from '../ui/use-toast'
import { MovieCard } from './movie-card'

export async function PopularMovies() {
  const popularMovies: Movie[] | void = await fetchPopularMoviesService()
    .then((res) => res && res.results)
    .catch((error) => {
      toast({
        title: 'Failed to fetch popular movies',
        description: error.message,
      })
    })

  return (
    <div className="grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full h-full items-start justify-start">
      {!!popularMovies &&
        popularMovies?.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </div>
  )
}
