const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

router.route('/login')
  .post((req, res) => {
    const knex = require('../knex.js');
    knex('users').where('email', req.body.email)
    .then((user) => {
      const compare = user[0].hashed_password;
      return bcrypt.compare(req.body.password, compare);
    })
    .then((verified) => {
      if (verified === false) {
        return res.status(400).end({ error: 'Invalid Email or Password' });
      }
      return knex('users').where('email', req.body.email);
    })
    .then((userToSend) => {
      const claim = { userId: userToSend.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '7 days',
      });
      delete userToSend[0].hashed_password;
      res.cookie('dgAuth', token);
      res.status(200).json(userToSend[0]);
    })
    .catch(err => res.status(400).json({ error: 'Invalid Email or Password' }));
  });

module.exports = router;
