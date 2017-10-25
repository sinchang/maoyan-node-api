const axios = require('axios')
const test = require('ava')

const BASEURL = 'http://localhost:3000/v1'
const showId = 230150
const date = '2017-10-25'

test('seats', async (t) => {
  const value = await axios.get(`${BASEURL}/seats?showId=${showId}&showDate=${date}`)
  t.is(value.status, 200)
})
