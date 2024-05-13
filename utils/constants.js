const NOT_FOUND = 404;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const CONFLICT = 409;
const SERVER_ERROR = 500;
const URL = 'mongodb://127.0.0.1:27017/bitfilmsdb';
const { PORT = 3000 } = process.env;
const DEV_KEY = 'super-secret';

module.exports = {
  NOT_FOUND,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  CONFLICT,
  SERVER_ERROR,
  URL,
  PORT,
  DEV_KEY,
};
