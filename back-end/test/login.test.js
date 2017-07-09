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

describe('#Login /api/login', (done) => {
  it('should allow a user to log in with correct credentials', (done) => {
    const user = {
      email: 'test@email.com',
      password: 'temp1234',
    };
    request(app)
      .post('/api/login')
      .set('Accept', 'application/json')
      .send(user)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect({
        id: 2,
        name: 'Test Account',
        email: 'test@email.com',
      }, done);
  });
  it('should throw an error when the email is wrong', (done) => {
    const badUser = {
      email: 'nottest@email.com',
      password: 'temp1234',
    };
    request(app)
      .post('/api/login')
      .set('Accept', 'application/json')
      .send(badUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, JSON.stringify('Invalid Email or Password'), done);
  });
  it('should throw an error when the password is wrong', (done) => {
    const badUser = {
      email: 'test@email.com',
      password: '1234temp',
    };
    request(app)
      .post('/api/login')
      .set('Accept', 'application/json')
      .send(badUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, JSON.stringify('Invalid Email or Password'), done);
  });
  it('should throw an error when the password is missing', (done) => {
    const badUser = {
      email: 'test@email.com',
    };
    request(app)
      .post('/api/login')
      .set('Accept', 'application/json')
      .send(badUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, JSON.stringify('Invalid Email or Password'), done);
  });
  it('should throw an error when the email is missing', (done) => {
    const badUser = {
      password: '1234temp',
    };
    request(app)
      .post('/api/login')
      .set('Accept', 'application/json')
      .send(badUser)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, JSON.stringify('Invalid Email or Password'), done);
  });
});
