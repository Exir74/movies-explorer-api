const Movie = require('../models/Movie');
const ValidationError = require('../errors/ValidationError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getCurrentUserMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movie) => {
      if (movie.length !== 0) {
        res.send({ movie });
      } else {
        throw new NotFoundError('Фильмы не найдена');
      }
    })
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      if (movie) {
        const owner = movie.owner.toString();
        if (owner !== req.user._id) {
          next(new ForbiddenError('Можно удалять только свои фильмы'));
        } else {
          return movie;
        }
      }
      throw new NotFoundError('Фильм не найден');
    })
    .then((movie) => {
      Movie.findByIdAndDelete(movie._id.toString())
        .then(() => res.send(movie))
        .catch(next);
    })
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => res.send({ movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};
