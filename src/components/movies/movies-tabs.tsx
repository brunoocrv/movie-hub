import { Suspense } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { PopularMovies } from './popular-movies'
import { MovieListSkeleton } from './skeletons/movies-list-skeleton'
import { UpcomingMovies } from './upcoming-movies'

export default function MoviesTabs() {
  return (
    <Tabs
      defaultValue="popular-movies"
      className="w-full h-full"
      data-testid="tabs"
    >
      <TabsList className="w-full">
        <TabsTrigger data-testid="tab-trigger" value="popular-movies">
          Popular movies
        </TabsTrigger>
        <TabsTrigger data-testid="tab-trigger" value="upcoming-movies">
          Upcoming movies
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="popular-movies"
        className="w-full"
        data-testid="tab-content"
      >
        <Suspense fallback={<MovieListSkeleton />}>
          <PopularMovies />
        </Suspense>
      </TabsContent>
      <TabsContent
        value="upcoming-movies"
        className="w-full"
        data-testid="tab-content"
      >
        <Suspense fallback={<MovieListSkeleton />}>
          <UpcomingMovies />
        </Suspense>
      </TabsContent>
    </Tabs>
  )
}
