const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-as-promised');

router.route('/login')
  .post((req, res) => {
    const knex = require('../knex.js');
    knex('users').where('email', req.body.email)
    .then((user) => {
      const compare = user[0].hashed_password;
      return bcrypt.compare(req.body.password, compare);
    })
    .then(verified => knex('users').where('email', req.body.email))
    .then((userToSend) => {
      const claim = { userId: userToSend.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '7 days',
      });
      delete userToSend[0].hashed_password;
      res.cookie('dgAuth', token);
      res.status(200).json(userToSend[0]);
    })
    .catch(err => res.status(400).json('Invalid Email or Password'));
  });

module.exports = router;
