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

describe('#Tags', (done) => {
  describe('GET /api/tags', (done) => {
    it('Should return all tags', (done) => {
      request(app)
        .get('/api/tags')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .expect([
          {
            id: 1,
            tag: 'Javascript',
          },
          {
            id: 2,
            tag: 'Technology',
          },
          {
            id: 3,
            tag: 'React',
          },
          {
            id: 4,
            tag: 'Front End',
          },
          {
            id: 5,
            tag: 'Life',
          },
          {
            id: 6,
            tag: 'Career',
          },
        ], done);
    });
  });
  describe('POST /api/tags', (done) => {
    it('Should post a tag to the database', (done) => {
      const newTag = { tag: 'WDR' };
      request(app)
        .post('/api/tags')
        .set('Accept', 'application/json')
        .send(newTag)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .expect([{ id: 7, tag: 'WDR' }], done);
    });
    it('Should throw an error if no tag', (done) => {
      const badTag = { badTag: 'n/a' };
      request(app)
        .post('/api/tags')
        .set('Accept', 'application/json')
        .send(badTag)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(400)
        .expect({ error: 'Please check that your body has the correct information' }, done);
    });
  });
  describe('POST /api/tags/blog', (done) => {
    it('Adds a new tag to a blog and returns status code 200', (done) => {
      const blog_tag = {
        blog_posts_id: 2,
        tags_id: 2,
      };
      request(app)
      .post('/api/tags/blog')
      .set('Accept', 'application/json')
      .send(blog_tag)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .expect(200, done);
    });
    it('Adds throws an error if a blog doesnt exist', (done) => {
      const blogTag = {
        blog_posts_id: 500,
        tags_id: 2,
      };
      request(app)
      .post('/api/tags/blog')
      .set('Accept', 'application/json')
      .send(blogTag)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, { error: 'Error adding tag. Please check your blog or tag ID' }, done);
    });
    it('Adds throws an error if a tag doesnt exist', (done) => {
      const blogTag = {
        blog_posts_id: 2,
        tags_id: 500,
      };
      request(app)
      .post('/api/tags/blog')
      .set('Accept', 'application/json')
      .send(blogTag)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, { error: 'Error adding tag. Please check your blog or tag ID' }, done);
    });
  });
});
