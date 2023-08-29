const router = require('express').Router();
const { createMovie, getCurrentUserMovies, deleteMovie } = require('../controllers/movieControls');
const { createMovieValidator, deleteMovieValidator } = require('../middlewares/movieValidator');

router.get('/movies', getCurrentUserMovies);
router.post('/movies', createMovieValidator, createMovie);
router.delete('/movies/:_id', deleteMovieValidator, deleteMovie);

module.exports = router;
