const axios = require('axios')
const test = require('ava')

const BASEURL = 'http://localhost:3000/v1'
const movieId = 341173

test('movie list', async (t) => {
  const value = await axios.get(`${BASEURL}/movies?offset=0&limit=10&type=hot`)
  t.is(value.data.data.movies.length, 10)
})

test('movie detail', async (t) => {
  const value = await axios.get(`${BASEURL}/movies/${movieId}`)
  t.is(value.data.data.MovieDetailModel.id, movieId)
})

test('movie comment', async (t) => {
  const value = await axios.get(`${BASEURL}/movies/${movieId}/comments?offset=0&limit=10`)
  t.is(value.data.data.movieid, movieId)
})
