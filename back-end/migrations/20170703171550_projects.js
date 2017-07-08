
exports.up = (knex, Promise) => knex.schema.createTable('projects', (table) => {
  table.increments('id')
  .primary();
  table.string('project_name', 'varchar(30)')
  .notNullable();
  table.string('github_url', 'varchar(65)')
  .notNullable()
  .unique();
  table.string('deployed_url', 'varchar(65)')
  .notNullable();
  table.string('picture', 'varchar(65)')
  .nullable();
  table.string('description', 2000)
  .notNullable();
  table.integer('created_by')
  .notNullable()
  .references('id')
  .inTable('users')
  .onDelete('CASCADE');
});

exports.down = (knex, Promise) => knex.schema.dropTable('projects');
