exports.seed = function (knex, Promise) {
  return knex('users').del()
  .then(() => knex('users').insert([
    {
      id: 1,
      name: 'Daniel Gardner',
      email: 'daniel.marc.gardner@gmail.com',
      hashed_password: '$2a$04$AbSPpvpI4./9zMWoNnBx6Or5iVTQduSrY/c3F93Gi.sRUt01jaC4u',
    },
    {
      id: 2,
      name: 'Test Account',
      email: 'test@email.com',
      hashed_password: '$2a$04$zW48l/PSyHiCMLsBvY3fmuH6PLYFVW7qs4t8jU0qhFFuq.MlNzpMu', //temp1234
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users))'));
};
