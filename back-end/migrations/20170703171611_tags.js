
exports.up = (knex, Promise) => knex.schema.createTable('tags', (table) => {
  table.increments('id')
  .primary();
  table.string('tag', 30)
  .notNullable()
  .unique();
});

exports.down = (knex, Promise) => knex.schema.dropTable('tags');
