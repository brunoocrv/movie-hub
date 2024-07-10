import Image from 'next/image'
import { lazy, Suspense } from 'react'

import { Movie } from '@/__types__/movies'
import { votesResolver } from '@/utils/votesResolver'

import { HookedDialog } from '../hooked-dialog'
import { LabelInfo } from '../label-info'
import { MovieDetailSkeleton } from './skeletons/movie-detail-skeleton'

export function MovieCard(movie: Movie) {
  const MovieDetail = lazy(() => import('@/components/movies/movie-detail'))
  return (
    <HookedDialog
      title={movie.title}
      trigger={
        <div
          key={movie.id}
          data-testid="movie-card"
          className="w-full h-full flex items-start justify-start rounded-lg bg-slate-100 cursor-pointer hover:opacity-50 transition ease-in-out"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            width={1000}
            height={1000}
            className="overflow-hidden object-cover w-40 h-full rounded-lg"
          />

          <div className="flex flex-col p-4 items-start justify-start space-y-4 truncate">
            <strong className="text-sm">{movie.title}</strong>
            <LabelInfo
              label="Release date:"
              content={<span>{movie.release_date}</span>}
            />
            <LabelInfo
              label="Average votes:"
              content={votesResolver(movie.vote_average)}
            />
          </div>
        </div>
      }
      content={
        <Suspense fallback={<MovieDetailSkeleton />}>
          <MovieDetail movieId={movie.id} />
        </Suspense>
      }
    />
  )
}
