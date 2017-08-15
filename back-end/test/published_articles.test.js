const request = require('supertest');
const app = require('../app');
const knex = require('../knex');
const expect = require('chai').expect;

process.env.NODE_ENV = 'test';

beforeEach((done) => {
  knex.migrate.latest()
  .then(() => knex.seed.run())
  .then(() => {
    done();
  })
  .catch((err) => {
    done(err);
  });
});

afterEach((done) => {
  knex.migrate.rollback()
  .then(() => done())
  .catch((err) => {
    done(err);
  });
});

after(() => {
  knex.destroy();
});

describe('#Published Articles', (done) => {
  describe('GET /api/articles', (done) => {
    it('Retrieve All Published Articles', (done) => {
      request(app)
      .get('/api/articles')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([
        {
          id: 1,
          title: 'How to Overcome The Fear of Changing Careers',
          source: 'LinkedIn',
          article_url: 'https://www.linkedin.com/pulse/how-overcome-fear-changing-careers-daniel-gardner',
          name: 'Daniel Gardner',
        },
      ], done);
    });
  });
  describe('GET /api/articles/:id', (done) => {
    it('Retrieve A specific Article', (done) => {
      request(app)
      .get('/api/articles/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([
        {
          id: 1,
          title: 'How to Overcome The Fear of Changing Careers',
          source: 'LinkedIn',
          article_url: 'https://www.linkedin.com/pulse/how-overcome-fear-changing-careers-daniel-gardner',
          name: 'Daniel Gardner',
        },
      ], done);
    });
    it('Throws an error if the article doesnt exist', (done) => {
      request(app)
      .get('/api/articles/500')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .expect({ error: 'An Error has occured. Please Check to make sure you are selecting a valid article' }, done);
    });
  });
  describe('POST /api/articles', (done) => {
    it('Add a new article to the database', (done) => {
      const newArticle = {
        title: 'How to set up your React-Redux Project',
        source: 'Medium',
        article_url: 'https://www.medium.com/soon-to-be-published',
        author: 1,
      };
      request(app)
      .post('/api/articles')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(newArticle)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([
        {
          id: 2,
          title: 'How to set up your React-Redux Project',
          source: 'Medium',
          article_url: 'https://www.medium.com/soon-to-be-published',
          name: 'Daniel Gardner',
        },
      ], done);
    });
  });
  describe('PATCH /api/articles/:id', (done) => {
    it('Update an article in the database', (done) => {
      const updated = {
        title: 'How to Overcome The Fear of Changing Careers',
        source: 'Medium',
        article_url: 'https://medium.com/@danielgardner/how-to-overcome-the-fear-of-changing-careers-8d5081225f34',
        author: 1,
      };
      request(app)
      .patch('/api/articles/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(updated)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([
        {
          id: 1,
          title: 'How to Overcome The Fear of Changing Careers',
          source: 'Medium',
          article_url: 'https://medium.com/@danielgardner/how-to-overcome-the-fear-of-changing-careers-8d5081225f34',
          name: 'Daniel Gardner',
        },
      ], done);
    });
    it('Throws an error if the updated article doesnt exist', (done) => {
      const updated = {
        title: 'How to Overcome The Fear of Changing Careers',
        source: 'Medium',
        article_url: 'https://medium.com/@danielgardner/how-to-overcome-the-fear-of-changing-careers-8d5081225f34',
        author: 1,
      };
      request(app)
      .patch('/api/articles/500')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(updated)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .expect({ error: 'An Error has occured. Please Check to make sure you are selecting a valid article' }, done);
    });
  });
});
