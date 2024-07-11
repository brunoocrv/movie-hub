import { Cast, Movie, MovieDetail } from '@/__types__/movies'

export const mockedMovie: Movie = {
  id: 1,
  title: 'Movie 1',
  poster_path: 'poster1.jpg',
  release_date: '2021-01-01',
  vote_average: 7.5,
}

export const mockedMovies: Movie[] = [
  {
    id: 1,
    title: 'Movie 1',
    poster_path: 'poster1.jpg',
    release_date: '2021-01-01',
    vote_average: 7.5,
  },
]

export const mockedCast: Cast[] = [
  {
    id: 1,
    name: 'Actor 1',
    character: 'Character 1',
    profile_path: 'profile1.jpg',
  },
]

export const mockedMovieDetail: MovieDetail = {
  id: 1,
  title: 'Movie 1',
  poster_path: 'poster1.jpg',
  release_date: '2021-01-01',
  vote_average: 7.5,
  overview: 'Overview',
  genres: [
    {
      id: 1,
      name: 'Action',
    },
  ],
  production_companies: [
    {
      id: 1,
      name: 'Company 1',
      logo_path: 'logo1.jpg',
    },
  ],
}
