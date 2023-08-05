const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../utils/constants');
const { NODE_ENV, JWT_SECRET } = process.env;
const AuthError = require('../errors/AuthError');
const { DEV_KEY } = require('../utils/constants');

module.exports = (req, res, next) => {
  const authorization = req.cookies.jwt;
  if (!authorization) {
    return (next(new AuthError('Необходима авторизация')));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : DEV_KEY);
  } catch (err) {
    return (next(new AuthError('Необходима авторизация')));
  }
  req.user = payload;
  return (next());
};
