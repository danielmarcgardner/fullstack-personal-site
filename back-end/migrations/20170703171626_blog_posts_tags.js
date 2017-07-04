
exports.up = (knex, Promise) => knex.schema.createTable('blog_posts_tags', (table) => {
  table.increments('id')
  .primary();
  table.integer('blog_posts_id')
  .notNullable()
  .references('id')
  .inTable('blog_posts')
  .onDelete('CASCADE');
  table.integer('tag_id')
  .notNullable()
  .references('id')
  .inTable('tags')
  .onDelete('CASCADE');
});

exports.down = (knex, Promise) => knex.schema.dropTable('blog_posts_tags');
