exports.seed = function (knex, Promise) {
  return knex('users').del()
  .then(() => knex('users').insert([
    {
      id: 1,
      name: 'Daniel Gardner',
      email: 'daniel.marc.gardner@gmail.com',
      hashed_password: '$2a$04$NmNvaGnT0y7uO58GFL1pt.AVScFD8eahTe6jknczfQOQzC4oXYzPW',
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users))'));
};
