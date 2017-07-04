
exports.up = (knex, Promise) => knex.schema.createTable('blog_posts', (table) => {
  table.increments('id')
  .primary();
  table.string('title', 'varchar(30)')
  .notNullable()
  .unique();
  table.string('content', 'varchar(4000)')
  .notNullable();
  table.integer('author')
  .notNullable()
  .references('id')
  .inTable('users')
  .onDelete('CASCADE');
});

exports.down = (knex, Promise) => knex.schema.dropTable('blog_posts');
