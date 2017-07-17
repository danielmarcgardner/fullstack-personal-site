const express = require('express');
const router = express.Router();

router.route('/blogposts')
  .get((req, res) => {
    const knex = require('../knex.js');
    return knex('blog_posts')
    .join('users', 'users.id', '=', 'blog_posts.author')
    // .join('blog_posts_tags', 'blog_posts_tags.blog_posts_id', '=', 'blog_posts.id')
    // .join('tags', 'tags.id', '=', 'blog_posts_tags.tags_id')
    .select('blog_posts.id', 'blog_posts.title', 'blog_posts.content', 'users.name')
    .then((blogPosts) => {
      res.status(200).json(blogPosts);
    })
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
    // .then((post) => {
    //   const tagsArr = req.body.tags;
    //   const promiseArr = [];
    //   for (let i = 0; i < tagsArr.length; i++) {
    //     const newTags = {
    //       blog_posts_id: post[0].id,
    //       tag_id: Number(tagsArr[i]),
    //     };
    //     promiseArr.push(knex.insert(newTags));
    //   }
    //   Promise.all(promiseArr);
    //   return post;
    // })
    .then(originalPost => knex('blog_posts').where('blog_posts.id', '=', originalPost[0].id)
      .join('users', 'users.id', '=', 'blog_posts.author')
      .select('blog_posts.id', 'blog_posts.title', 'blog_posts.content', 'users.name'))
      .then(toSend => res.status(200).json(toSend))
      .catch(err => console.error(err));
  });


module.exports = router;
