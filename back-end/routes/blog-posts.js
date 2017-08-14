const express = require('express');
const router = express.Router();
const sorterOfBlogs = require('../helpers/blog_tags_helper');

router.route('/blogposts')
  .get((req, res) => {
    const knex = require('../knex.js');
    return knex('blog_posts')
    .join('users', 'users.id', '=', 'blog_posts.author')
    .join('blog_posts_tags', 'blog_posts_tags.blog_posts_id', '=', 'blog_posts.id')
    .join('tags', 'tags.id', '=', 'blog_posts_tags.tags_id')
    .select('blog_posts.id', 'blog_posts.title', 'blog_posts.content', 'users.name', 'tags.tag')
    .orderBy('blog_posts.id', 'asc')
    .then(blogPosts => res.status(200).json(sorterOfBlogs(blogPosts)))
    .catch((err) => {
      console.log(err);
    });
  })

  .post((req, res) => {
    const knex = require('../knex.js');
    const newPost = {
      title: req.body.title,
      content: req.body.content,
      author: Number(req.body.author),
    };
    return knex('blog_posts').insert(newPost, '*')
    .then((post) => {
      const tagsArr = req.body.tags;
      const promiseArr = [];
      for (let i = 0; i < tagsArr.length; i++) {
        const newTags = {
          blog_posts_id: post[0].id,
          tags_id: Number(tagsArr[i]),
        };
        promiseArr.push(knex('blog_posts_tags').insert(newTags));
      }
      return Promise.all(promiseArr);
    })
    .then(originalPost => knex('blog_posts')
      .join('users', 'users.id', '=', 'blog_posts.author')
      .join('blog_posts_tags', 'blog_posts_tags.blog_posts_id', '=', 'blog_posts.id')
      .join('tags', 'tags.id', '=', 'blog_posts_tags.tags_id')
      .select('blog_posts.id', 'blog_posts.title', 'blog_posts.content', 'users.name', 'tags.tag')
      .where('blog_posts.content', '=', req.body.content)
      .orderBy('blog_posts.id', 'asc'))
      .then(toSend => res.status(200).json(sorterOfBlogs(toSend)))
      .catch(err => console.error(err));
  });

router.route('/blogposts/:id')
  .patch((req, res) => {
    const knex = require('../knex.js');
    const id = Number(req.params.id);
    knex('blog_posts')
    .where('blog_posts.id', '=', id)
    .update(req.body)
    .then(updated => knex('blog_posts')
      .where('blog_posts.id', '=', id)
      .join('users', 'users.id', '=', 'blog_posts.author')
      .join('blog_posts_tags', 'blog_posts_tags.blog_posts_id', '=', 'blog_posts.id')
      .join('tags', 'tags.id', '=', 'blog_posts_tags.tags_id')
      .select('blog_posts.id', 'blog_posts.title', 'blog_posts.content', 'users.name', 'tags.tag'))
    .then(toSend => res.status(200).json(sorterOfBlogs(toSend)));
  })
  .get((req, res) => {
    const knex = require('../knex.js');
    const id = Number(req.params.id);
    knex('blog_posts')
    .where('blog_posts.id', '=', id)
    .join('users', 'users.id', '=', 'blog_posts.author')
    .join('blog_posts_tags', 'blog_posts_tags.blog_posts_id', '=', 'blog_posts.id')
    .join('tags', 'tags.id', '=', 'blog_posts_tags.tags_id')
    .select('blog_posts.id', 'blog_posts.title', 'blog_posts.content', 'users.name', 'tags.tag')
    .then(toSend => res.status(200).json(sorterOfBlogs(toSend)));
  });


module.exports = router;
