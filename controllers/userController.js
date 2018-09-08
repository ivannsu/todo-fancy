require('dotenv').config()

const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  signup: (req, res) => {
    let input = {
      email: req.body.email,
      password: req.body.password,
      loginType: 'app'
    }

    User.findOneAndCreate({email: input.email}, input)
    .then(newUser => {
      res.status(201).json({
        message: 'sign up successfully',
        user: newUser
      });
    })
    .catch(err => {
      if(!err) {
        res.status(500).json({
          error: 'email already used'
        });
      } else {
        res.status(500).json({
          error: err.message
        });
      }
    });
  }
}