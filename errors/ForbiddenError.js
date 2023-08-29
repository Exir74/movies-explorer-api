const { FORBIDDEN } = require('../utils/constants');

module.exports = class Forbidden extends Error {
  constructor(message) {
    super(message);
    this.name = 'Forbidden';
    this.statusCode = FORBIDDEN;
  }
};
