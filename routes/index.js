const express = require('express')

const router = express.Router()
const Controller = require('../controller')

router.get('/movies', Controller.getMovieList)
router.get('/movies/:id', Controller.getMovieDetail)
router.get('/movies/:id/comments', Controller.getMovieComment)
router.get('/cinemas', Controller.getCinemas)
router.get('/cinemas/:cinemaId/movies/:movieId', Controller.getCinemaDetail)
router.get('/seats', Controller.showSeats)

module.exports = router
