
exports.seed = function (knex, Promise) {
  return knex('published_articles').del()
  .then(() => knex('published_articles').insert([
    {
      id: 1,
      title: 'How to Overcome The Fear of Changing Careers',
      source: 'LinkedIn',
      article_url: 'https://www.linkedin.com/pulse/how-overcome-fear-changing-careers-daniel-gardner',
      author: 1,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'published_articles_id_seq\', (SELECT MAX(id) FROM published_articles))'));
};
