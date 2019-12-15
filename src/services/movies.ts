import axios from 'axios'

const imdbAPI = 'http://www.omdbapi.com'
const apiKey = '2c5cb6b8'

export const getMovies = (search: string) => {
  const params = { s: search, apikey: apiKey }
  return axios.get(imdbAPI, { params })
}

export const getMovie = (imdbID: string) => {
  const params = { i: imdbID, apikey: apiKey }
  return axios.get(imdbAPI, { params })
}