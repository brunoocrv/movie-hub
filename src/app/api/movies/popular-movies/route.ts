import { NextResponse } from 'next/server'

import { Movie } from '@/__types__/movies'

export async function GET() {
  const popularMovies = await fetch(
    'https://api.themoviedb.org/3/movie/popular',
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    },
  ).then((res) => res.json())

  return NextResponse.json(
    { results: popularMovies.results as Array<Movie> },
    { status: 200 },
  )
}
