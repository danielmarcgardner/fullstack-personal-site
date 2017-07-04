module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/personal-site_dev',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/personal-site_test',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
