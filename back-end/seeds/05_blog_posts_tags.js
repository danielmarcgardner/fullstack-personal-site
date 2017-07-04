
exports.seed = function (knex, Promise) {
  return knex('blog_posts_tags').del()
  .then(() => knex('blog_posts_tags').insert([
    {
      id: 1,
      blog_posts_id: 1,
      tag_id: 1,
    },
    {
      id: 2,
      blog_posts_id: 1,
      tag_id: 2,
    },
    {
      id: 3,
      blog_posts_id: 1,
      tag_id: 3,
    },
    {
      id: 4,
      blog_posts_id: 1,
      tag_id: 4,
    },
    {
      id: 5,
      blog_posts_id: 1,
      tag_id: 5,
    },
    {
      id: 6,
      blog_posts_id: 1,
      tag_id: 6,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'blog_posts_tags_id_seq\', (SELECT MAX(id) FROM blog_posts_tags))'));
};
