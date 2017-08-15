const express = require('express');
const router = express.Router();

router.route('/articles')
  .get((req, res) => {
    const knex = require('../knex.js');
    knex('published_articles')
    .join('users', 'users.id', '=', 'published_articles.author')
    .select('users.name', 'published_articles.title', 'published_articles.source', 'published_articles.article_url', 'published_articles.id')
    .then(articles => res.status(200).json(articles));
  })
  .post((req, res) => {
    const knex = require('../knex.js');
    knex('published_articles')
    .insert(req.body, '*')
    .then(newArticle => knex('published_articles')
      .where('published_articles.id', '=', newArticle[0].id)
      .join('users', 'users.id', '=', 'published_articles.author')
      .select('users.name', 'published_articles.title', 'published_articles.source', 'published_articles.article_url', 'published_articles.id'))
      .then(toSend => res.status(200).json(toSend));
  });

router.route('/articles/:id')
  .get((req, res) => {
    const knex = require('../knex.js');
    const id = Number(req.params.id);
    knex('published_articles')
    .where('published_articles.id', '=', id)
    .join('users', 'users.id', '=', 'published_articles.author')
    .select('users.name', 'published_articles.title', 'published_articles.source', 'published_articles.article_url', 'published_articles.id')
    .then((toSend) => {
      if (toSend.length === 0) {
        return res.status(400).end({ error: 'An Error has occured. Please Check to make sure you are selecting a valid article' });
      }
      return res.status(200).json(toSend);
    })
    .catch(err => res.status(400).json({ error: 'An Error has occured. Please Check to make sure you are selecting a valid article' }));
  })

  .patch((req, res) => {
    const knex = require('../knex.js');
    const id = Number(req.params.id);
    knex('published_articles').max('id')
    .then((max) => {
      if (max[0].max < id || id < 0) {
        return res.status(400).end({ error: 'An Error has occured. Please Check to make sure you are selecting a valid article' });
      }
      return knex('published_articles')
        .where('published_articles.id', '=', id)
        .update(req.body, '*');
    })
    .then(updatedArticle => knex('published_articles')
      .where('published_articles.id', '=', updatedArticle[0].id)
      .join('users', 'users.id', '=', 'published_articles.author')
      .select('users.name', 'published_articles.title', 'published_articles.source', 'published_articles.article_url', 'published_articles.id'))
      .then(toSend => res.status(200).json(toSend))
      .catch(err => res.status(400).json({ error: 'An Error has occured. Please Check to make sure you are selecting a valid article' }));
  });

module.exports = router;
