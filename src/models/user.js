const mongoose = require('mongoose');
const validator = require('validator')

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a postive number');
      }
    }
  }
});

module.exports = User;
