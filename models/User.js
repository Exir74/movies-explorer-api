const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Введен не корректный email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minLength: [2, 'Поле name должно быть больше 2 символов'],
    maxLength: [30, 'Поле name должно быть меньше 30 символов'],
  },
});

user.statics.login = function login(email, password, next) {
  return this.findOne({ email }).select('+password')
    .then((userData) => {
      if (!userData) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
      return bcrypt.compare(password, userData.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }
          return userData;
        })
        .catch(next);
    })
    .catch(next);
};

user.set('toJSON', {
  transform(doc, ret) {
    const data = ret;
    delete data.password;
    return data;
  },
});

module.exports = mongoose.model('User', user);
