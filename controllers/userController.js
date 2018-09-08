require('dotenv').config()

const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  signin: (req, res) => {
    let input = {
      email: req.body.email,
      password: req.body.password
    }

    User.findOne(input)
    .then(user => {
      if(!user) {
        res.status(401).json({
          message: 'please sign up first'
        });
      } else {
        let token = jwt.sign({
          email: user.email,
          loginType: user.loginType
        }, process.env.JWT_SECRET_KEY);

        res.status(200).json({
          message: 'sign in successfully',
          token: token
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err.message
      });
    });
  },
  
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