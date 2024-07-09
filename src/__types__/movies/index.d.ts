export interface Movie {
  id: number
  title: string
  poster_path: string
  release_date: string
  vote_average: number
}

export interface Genre {
  id: number
  name: string
}

export interface MovieDetail extends Movie {
  genres: Genre[]
  production_companies: {
    id: number
    logo_path: string
    name: string
  }[]
  overview: string
}

export interface Cast {
  id: number
  profile_path: string
  character: string
  name: string
}
