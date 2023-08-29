const { UNAUTHORIZED } = require('../utils/constants');

module.exports = class Unauthorized extends Error {
  constructor(message) {
    super(message);
    this.name = 'Unauthorized';
    this.statusCode = UNAUTHORIZED;
  }
};
