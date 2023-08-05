const { celebrate, Joi } = require('celebrate');

const updateUserInfoValidation = celebrate({
  query: Joi.object().keys({
    user: Joi.object().keys({
      _id: Joi.string().hex().length(24).required(),
    }),
  }),
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().min(2).email().required(),
  }),
});

const userValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().min(2).email().required(),
    password: Joi.string().min(5).required(),
  }),
});

module.exports = {
  updateUserInfoValidation,
  userValidation,
};
