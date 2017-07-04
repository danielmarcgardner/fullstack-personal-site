
exports.seed = function (knex, Promise) {
  return knex('tags').del()
  .then(() => knex('tags').insert([
    {
      id: 1,
      tag: 'Javascript',
    },
    {
      id: 2,
      tag: 'Technology',
    },
    {
      id: 3,
      tag: 'React',
    },
    {
      id: 4,
      tag: 'Front End',
    },
    {
      id: 5,
      tag: 'Life',
    },
    {
      id: 6,
      tag: 'Career',
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'tags_id_seq\', (SELECT MAX(id) FROM tags))'));
};
