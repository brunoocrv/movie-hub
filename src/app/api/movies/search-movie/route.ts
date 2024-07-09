import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const query = searchParams.get('query')

  const { results } = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query?.replace(' ', '+')}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    },
  ).then((res) => res.json())

  return NextResponse.json({ results: results.slice(0, 20) }, { status: 200 })
}
