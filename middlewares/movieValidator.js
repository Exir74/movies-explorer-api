const { celebrate, Joi } = require('celebrate');

const regex = /http(:|s:)\/\/(www|)[\w\S]+[.][\w\S]{2,}(|\/)/i;

const deleteMovieValidator = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().length(24).required(),
  }),
  query: Joi.object().keys({
    user: Joi.object().keys({
      _id: Joi.string().hex().length(24).required(),
    }),
  }),
});

const createMovieValidator = celebrate({
  query: Joi.object().keys({
    user: Joi.object().keys({
      _id: Joi.string().hex().length(24).required(),
    }),
  }),
  body: Joi.object().keys({
    country: Joi.string().min(2).max(30).required(),
    director: Joi.string().min(2).max(30).required(),
    duration: Joi.number().min(0).max(999).required(),
    year: Joi.number().min(1700).max(3000).required(),
    description: Joi.string().min(2).max(130).required(),
    image: Joi.string().pattern(regex).required(),
    trailerLink: Joi.string().pattern(regex).required(),
    nameRU: Joi.string().min(2).max(30).required(),
    nameEN: Joi.string().min(2).max(30).required(),
    thumbnail: Joi.string().pattern(regex).required(),
    movieId: Joi.number().required(),
  }),
});

module.exports = {
  deleteMovieValidator,
  createMovieValidator,
};
