const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Превышено максимальное количество запросов. Попробуйте позже.',
});

module.exports = {
  limiter: rateLimiter,
};
