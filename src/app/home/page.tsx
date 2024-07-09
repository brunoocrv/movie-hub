import { Suspense } from 'react'

import { PopularMovies } from '@/components/movies/popular-movies'
import { SearchMovie } from '@/components/movies/search-movie'
import { MovieListSkeleton } from '@/components/movies/skeletons/movies-list-skeleton'
import { UpcomingMovies } from '@/components/movies/upcoming-movies'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 lg:p-20 space-y-8">
      <strong className="place-self-center" data-testid="movie-hub">
        movie hub
      </strong>
      <SearchMovie />
      <Tabs defaultValue="popular-movies" className="w-full h-full">
        <TabsList className="w-full">
          <TabsTrigger value="popular-movies">Popular movies</TabsTrigger>
          <TabsTrigger value="upcoming-movies">Upcoming movies</TabsTrigger>
        </TabsList>
        <TabsContent value="popular-movies" className="w-full">
          <Suspense fallback={<MovieListSkeleton />}>
            <PopularMovies />
          </Suspense>
        </TabsContent>
        <TabsContent value="upcoming-movies" className="w-full">
          <Suspense fallback={<MovieListSkeleton />}>
            <UpcomingMovies />
          </Suspense>
        </TabsContent>
      </Tabs>
    </main>
  )
}
