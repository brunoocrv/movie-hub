import { SearchMovie } from '@/components/movies/search-movie'
import { MovieListSkeleton } from '@/components/movies/skeletons/movies-list-skeleton'
import { lazy, Suspense } from 'react'

const MoviesTabs = lazy(() => import('@/components/movies/movies-tabs'))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 lg:p-20 space-y-8">
      <strong className="place-self-center dark:invert" data-testid="movie-hub">
        movie hub
      </strong>
      <SearchMovie />
      <Suspense fallback={<MovieListSkeleton />}>
        <MoviesTabs />
      </Suspense>
    </main>
  )
}
