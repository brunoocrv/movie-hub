'use client'

import { Loader2, X } from 'lucide-react'
import { useState, useTransition } from 'react'

import { Movie } from '@/__types__/movies'
import { searchMovieService } from '@/http/services/movies/search-movie.service'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { MovieCard } from './movie-card'

export function SearchMovie() {
  const [valueToSearch, setValueToSearch] = useState('')
  const [findedMovies, setFindedMovies] = useState<Movie[]>([])

  const [pending, startTransition] = useTransition()

  async function handleSearch() {
    startTransition(async () => {
      const { results } = await searchMovieService(valueToSearch)

      console.log(results)

      setValueToSearch('')
      setFindedMovies(results)
    })
  }

  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <div className="flex w-full gap-4">
        <Input
          placeholder="Search for movies"
          value={valueToSearch}
          data-testid="search-input"
          onChange={(event) => setValueToSearch(event.target.value)}
        />
        <Button data-testid="search-button" onClick={() => handleSearch()}>
          Search
        </Button>
      </div>
      {pending && (
        <span className="flex items-center justify-center gap-2 place-self-center text-black w-full">
          <Loader2 className="animate-spin" /> Carregando filmes...
        </span>
      )}
      {!pending && findedMovies.length > 0 && (
        <div className="flex flex-col items-start justify-start w-full space-y-4">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              data-testid="clear-results-button"
              onClick={() => {
                setFindedMovies([])
              }}
            >
              Limpar busca <X size={14} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {findedMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
