const axios = require('axios')
const test = require('ava')

const BASEURL = 'http://localhost:3000/v1'
const movieId = 341173
const cinemaId = 14410

test('cinemas list', async (t) => {
  const value = await axios.get(`${BASEURL}/cinemas`)
  t.is(value.data.status, 0)
})

test('cinemas list', async (t) => {
  const value = await axios.get(`${BASEURL}/cinemas/${cinemaId}/movies/${movieId}`)
  t.is(value.data.data.currentMovie.id, movieId)
  t.is(value.data.data.cinemaDetailModel.id, cinemaId)
})
