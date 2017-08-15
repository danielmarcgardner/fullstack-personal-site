const express = require('express');
const router = express.Router();

router.route('/tags')
  .get((req, res) => {
    const knex = require('../knex.js');
    knex('tags').select('*')
    .then(toSend => res.status(200).json(toSend));
  })

  .post((req, res) => {
    const knex = require('../knex.js');
    knex('tags').insert(req.body, '*')
    .then(toSend => res.status(200).json(toSend))
    .catch(err => res.status(400).json({ error: 'Please check that your body has the correct information' }));
  });

router.route('/tags/blog')
  .post((req, res) => {
    const knex = require('../knex.js');
    knex('blog_posts_tags')
    .insert(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).json({ error: 'Error adding tag. Please check your blog or tag ID' }));
  });

module.exports = router;
