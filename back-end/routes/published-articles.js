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
    .then(toSend => res.status(200).json(toSend));
  })
  .patch((req, res) => {
    const knex = require('../knex.js');
    const id = Number(req.params.id);
    knex('published_articles')
    .where('published_articles.id', '=', id)
    .update(req.body, '*')
    .then(updatedArticle => knex('published_articles')
      .where('published_articles.id', '=', updatedArticle[0].id)
      .join('users', 'users.id', '=', 'published_articles.author')
      .select('users.name', 'published_articles.title', 'published_articles.source', 'published_articles.article_url', 'published_articles.id'))
      .then(toSend => res.status(200).json(toSend));
  });

module.exports = router;
