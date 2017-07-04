
exports.up = (knex, Promise) => knex.schema.createTable('users', (table) => {
  table.increments('id')
  .primary();
  table.string('name', 'varchar(30)')
  .notNullable();
  table.string('email', 'varchar(65)')
  .notNullable()
  .unique();
  table.string('hashed_password', 'char(60)')
  .notNullable();
});

exports.down = (knex, Promise) => knex.schema.dropTable('users');
