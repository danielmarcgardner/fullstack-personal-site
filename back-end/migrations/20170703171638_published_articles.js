exports.up = (knex, Promise) => knex.schema.createTable('published_articles', (table) => {
  table.increments('id')
  .primary();
  table.string('title', 'varchar(65)')
  .notNullable()
  .unique();
  table.string('source', 'varchar(65)')
  .notNullable();
  table.string('article_url', 'varchar(65)')
  .notNullable();
  table.integer('writer_id')
  .notNullable()
  .references('id')
  .inTable('users')
  .onDelete('CASCADE');
});

exports.down = (knex, Promise) => knex.schema.dropTable('published_articles');
