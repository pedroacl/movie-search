interface Rating {
  Source: string
  Value: string
}

export interface MovieListDetails {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export interface MovieDetails {
  Actors: string
  Awards: string
  BoxOffice?: string
  Country: string
  DVD?: string
  Director: string
  Genre?: string
  Language?: string
  Metascore?: string
  Plot?: string
  Poster: string
  Runtime: string
  Year: string
  Rated: string
  Ratings?: Rating[]
  Released: string
  Response: string
  Runtime: string
  Type?: string
  Writer?: string
  Title: string
  imdbID: string
}