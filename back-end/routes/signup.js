const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-as-promised');
 /* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/signup')
  .post((req, res) => {
    const knex = require('../knex.js');
    bcrypt.hash(req.body.password, 2)
    .then((hashed_password) => {
      const newUser = {
        hashed_password,
        name: req.body.name,
        email: req.body.email,
      };
      return knex('users').insert(newUser, '*');
    })
    .then((signUp) => {
      const claim = { userId: signUp.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '7 days',
      });
      delete signUp[0].hashed_password;
      res.cookie('dgAuth', token);
      res.status(200).json(signUp[0]);
    })
    .catch((err) => {
      res.status(400).json('Email is already registered or field missing');
    });
  });

module.exports = router;
