import axios from 'axios'

const omdbApi = 'http://www.omdbapi.com'
// const omdbApi = 'www.omdbapi.com/?i=tt3896198&apikey=2c5cb6b8'

export const getMovies = (search: string) => {
  const params = {s: search, apikey: '2c5cb6b8'}
  return axios.get(omdbApi, {params})
}