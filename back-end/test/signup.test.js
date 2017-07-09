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

describe('#Signup /api/signup', (done) => {
  it('It should allow a user to signup with an email, password, and name', (done) => {
    const newUser = {
      name: 'Annelys Roque',
      password: 'bulldoggy15',
      email: 'aroque87@gmail.com',
    };
    request(app)
      .post('/api/signup')
      .set('Accept', 'application/json')
      .send(newUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect({
        id: 3,
        name: 'Annelys Roque',
        email: 'aroque87@gmail.com',
      }, done);
  });
  it('Should throw error if user already registered', (done) => {
    const badUser = {
      name: 'Daniel Gardner',
      email: 'daniel.marc.gardner@gmail.com',
      password: 'temp1234',
    };
    request(app)
      .post('/api/signup')
      .set('Accept', 'application/json')
      .send(badUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, JSON.stringify('Email is already registered or field missing'), done);
  });
  it('Should throw error if missing name', (done) => {
    const badUser = {
      password: 'bulldoggy15',
      email: 'aroque87@gmail.com',
    };
    request(app)
      .post('/api/signup')
      .set('Accept', 'application/json')
      .send(badUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, JSON.stringify('Email is already registered or field missing'), done);
  });
  it('Should throw error if missing email', (done) => {
    const badUser = {
      password: 'bulldoggy15',
      name: 'Annelys Roque',
    };
    request(app)
      .post('/api/signup')
      .set('Accept', 'application/json')
      .send(badUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, JSON.stringify('Email is already registered or field missing'), done);
  });
  it('Should throw error if missing passing', (done) => {
    const badUser = {
      name: 'Annelys Roque',
      email: 'aroque87@gmail.com',
    };
    request(app)
      .post('/api/signup')
      .set('Accept', 'application/json')
      .send(badUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, JSON.stringify('Email is already registered or field missing'), done);
  });
});
