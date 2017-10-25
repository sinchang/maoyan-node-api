const axios = require('axios')

const BASEURL = 'http://m.maoyan.com'

function axiosRequest(url, res) {
  axios({
    method: 'GET',
    url,
  }).then((response) => {
    res.status(response.status).send(response.data)
  }).catch((error) => {
    console.log(error.response)
    res.status(error.response.status).send(error.response.statusText)
  })
}

exports.getMovieList = (req, res) => {
  const { type, limit, offset } = req.query
  const url = `${BASEURL}/movie/list.json?type=${type}&offset=${offset}&limit=${limit}`
  axiosRequest(url, res)
}

exports.getMovieDetail = (req, res) => {
  const id = req.params.id
  const url = `${BASEURL}/movie/${id}.json`
  axiosRequest(url, res)
}

exports.getMovieComment = (req, res) => {
  const { offset, limit } = req.query
  const id = req.params.id
  const url = `${BASEURL}/comments.json?movieid=${id}&limit=${limit}&offset=${offset}`
  axiosRequest(url, res)
}

exports.getCinemas = (req, res) => {
  const url = `${BASEURL}/cinemas.json`
  axiosRequest(url, res)
}

exports.getCinemaDetail = (req, res) => {
  const url = `${BASEURL}/showtime/wrap.json?cinemaid=${req.params.cinemaId}&movieid=${req.params.movieId}`
  axiosRequest(url, res)
}

exports.showSeats = (req, res) => {
  const url = `${BASEURL}/show/seats?showId=${req.query.showId}&showDate=${req.query.showDate}`
  axiosRequest(url, res)
}
