const { SERVER_ERROR } = require('../utils/constants');

module.exports = class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ServerError';
    this.statusCode = SERVER_ERROR;
  }
};
