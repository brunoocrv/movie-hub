import Image from 'next/image'

import { fetchMovieDetailService } from '@/http/services/movies/fetch-movie-detail.service'

import { LabelInfo } from '../label-info'
import { Badge } from '../ui/badge'

export default async function MovieDetail({ movieId }: { movieId: number }) {
  const { movie, cast } = await fetchMovieDetailService(movieId)
  return (
    <div className="flex flex-col w-full space-y-4">
      {!movie && (
        <span className="place-self-center text-gray-500">
          Não foi possível carregar as informações, tente novamente mais tarde
        </span>
      )}
      {!!movie && movie.id && (
        <div className="flex flex-col lg:flex-row w-full items-start justify-start gap-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-28 lg:w-64 place-self-center lg:place-self-start rounded-lg"
          />

          <div className="space-y-4">
            <LabelInfo
              label="Overview:"
              content={<span className="text-sm">{movie.overview}</span>}
            />
            <LabelInfo
              label="Release date:"
              content={
                <span className="text-sm">
                  {new Intl.DateTimeFormat('en', {
                    dateStyle: 'medium',
                  }).format(new Date(movie.release_date)) ?? '-'}
                </span>
              }
            />
            <LabelInfo
              label="Genres:"
              content={
                <div className="flex gap-2 w-full flex-wrap">
                  {movie.genres.map((genre) => (
                    <Badge key={genre.id}>{genre.name}</Badge>
                  ))}
                </div>
              }
            />
            <LabelInfo
              label="Production companies:"
              content={
                <div className="flex gap-2 flex-wrap w-full">
                  {movie.production_companies.map((company) => (
                    <Badge key={company.id} variant="secondary">
                      {company.name}
                    </Badge>
                  ))}
                </div>
              }
            />
            <LabelInfo
              label="Cast:"
              content={
                <div className="grid grid-cols-2 gap-2">
                  {cast !== undefined
                    ? cast.map((actor) => (
                        <div
                          key={actor.id}
                          className="text-xs flex items-end justify-start gap-2"
                        >
                          <Image
                            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                            alt=""
                            width={1000}
                            height={1000}
                            className="object-cover w-12 rounded-lg"
                          />
                          <div className="flex flex-col">
                            <span>{actor.character}</span>
                            <span className="text-gray-400">{actor.name}</span>
                          </div>
                        </div>
                      ))
                    : 'No cast available'}
                </div>
              }
            />
          </div>
        </div>
      )}
    </div>
  )
}
