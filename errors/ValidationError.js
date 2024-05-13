const { BAD_REQUEST } = require('../utils/constants');

module.exports = class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = BAD_REQUEST;
  }
};
