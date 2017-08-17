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

describe('#Projects', (done) => {
  describe('GET /api/projects', (done) => {
    it('pulls all projects from the database', (done) => {
      request(app)
        .get('/api/projects')
        .set('Accept', 'application/json')
        // .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .expect([
          {
            id: 1,
            project_name: 'lvl^',
            github_url: 'https://github.com/danielmarcgardner/level-up',
            deployed_url: 'http://lvlup-galvanize.herokuapp.com/',
            description: 'lvl^ is a gamified education enrichment platform for students currently enrolled in a Galvanize immersive learning program. The lvl^ web app is a full-stack web application that gives students and administrators an interface to participate in the reward based platform designed to help students reach their career goals. Students are provided with challenges and rewards which fall into four categories: education, community, career and life. These challenges give students an opportunity to complete tasks that will contribute to their growth in the respective categories. Examples of challenges include: mentoring a student in a junior cohort, conducting informational interviews, building a side project, or writing a LinkedIn/Medium article. Students earn points for completing challenges which can be cashed in for rewards. Rewards can include 30 minutes of paired programming with an instructor, a ticket to a Galvanize community lunch, business cards, or a $5 gift card to the cafe.',
            name: 'Daniel Gardner',
          },
          {
            id: 2,
            project_name: 'CheeSwhiz',
            github_url: 'https://github.com/danielmarcgardner/CheeSwhiz',
            deployed_url: 'http://cheeswhiz.herokuapp.com/api-docs/',
            description: 'CheeSwhiz is an api that allows users to get information about Cheese. CheeSwhiz has 3 levels of users: non-logged in, registered users, and super-users. All users can view all cheeses in the database; add a cheese to the database; search for cheeses by name, animal milk, firmness; find a substitute cheese; randomly generate a cheese; and find a local cheese store. Everyone can log in or create a basic account with CheeSwhiz. Registered users can save favorite cheeses, add notes to their favorite cheeses, and delete favorites. Lastly there are super-users (@danielmarcgardner and @reidPD) who can update cheeses in the database as well as delete them.',
            name: 'Daniel Gardner',
          },
          {
            id: 3,
            project_name: 'Trucking Around',
            github_url: 'https://github.com/danielmarcgardner/Trucking-Around',
            deployed_url: 'http://truckingaround.surge.sh/',
            description: 'Rather than searching through twitter or facebook for updates on trucks, Trucking Around lets users search by location in SF using distance and day of the week filters. The search returns the trucks on the map as well as a side panel where users can get more information about the trucks, add and remove favorites, as well as get directions to the truck.',
            name: 'Daniel Gardner',
          },
          {
            id: 4,
            project_name: 'gHoodies',
            github_url: 'https://github.com/danielmarcgardner/gHoodies',
            deployed_url: 'https://ghoodies.herokuapp.com/',
            description: 'gHoodies was born from a challenge from an instructor to students who wanted their galvanize hoodies before graduation. The instructor challenged those who were interested to build a basic fullstack app he could show school administrators and if it worked the cohort would get their hoodies earlier.gHoodies allows current Galvanize Students to search and see if they are in the database. If the student is not they can fill out their information to be added along with sizing specifications. If a student is already in the database they can make changes if needed. To view all records by cohort there is a `View Reports` button that generates the information. Galvanize loved the app and gave all students in the cohort their sweatshirts early. gHoodies is built with HTML, CSS, Materialize, Javascript, jQuery, Node.js, Express, Postgesql, and knex. gSwag lead on the Front-End by Thomas Stang (@tkstang) and on the Back-End by Daniel Gardner (@danielmarcgardner) with contributions by Randall Spencer (@holdonowgo), Matt Muir (@Mattimus333), and Ryan Thissen (@ryanthissen).',
            name: 'Daniel Gardner',
          },
          {
            id: 5,
            project_name: 'This Fullstack Personal Blog Site!',
            github_url: 'https://github.com/danielmarcgardner/fullstack-personal-site',
            deployed_url: 'http://danielmarcgardner.com',
            description: 'My personal website! I challenged myself to make a full stack website that included a blog to show off my development skills.',
            name: 'Daniel Gardner',
          },
        ], done);
    });
  });
  describe('GET /api/projects/:id', (done) => {
    it('Gets a project by specific ID', (done) => {
      request(app)
        .get('/api/projects/1')
        .set('Accept', 'application/json')
        // .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .expect([
          {
            id: 1,
            project_name: 'lvl^',
            github_url: 'https://github.com/danielmarcgardner/level-up',
            deployed_url: 'http://lvlup-galvanize.herokuapp.com/',
            description: 'lvl^ is a gamified education enrichment platform for students currently enrolled in a Galvanize immersive learning program. The lvl^ web app is a full-stack web application that gives students and administrators an interface to participate in the reward based platform designed to help students reach their career goals. Students are provided with challenges and rewards which fall into four categories: education, community, career and life. These challenges give students an opportunity to complete tasks that will contribute to their growth in the respective categories. Examples of challenges include: mentoring a student in a junior cohort, conducting informational interviews, building a side project, or writing a LinkedIn/Medium article. Students earn points for completing challenges which can be cashed in for rewards. Rewards can include 30 minutes of paired programming with an instructor, a ticket to a Galvanize community lunch, business cards, or a $5 gift card to the cafe.',
            name: 'Daniel Gardner',
          }], done);
    });
    it('Throws an error when the project does not exist', (done) => {
      request(app)
        .get('/api/projects/500')
        .set('Accept', 'application/json')
        // .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(400)
        .expect({ error: 'An Error has occured. Please Check to make sure you are selecting a valid blog post' }, done);
    });
  });
  describe('POST /api/projects', (done) => {
    it('Adds a project to the database', (done) => {
      const newProject = {
        project_name: 'Learn To Code Workshop Materials',
        github_url: 'https://github.com/danielmarcgardner/LearnToCode-HTML-CSS',
        deployed_url: 'N/A',
        description: 'My materials for my Learn To Code Workshop',
        created_by: 1,
      };
      request(app)
        .post('/api/projects')
        .set('Accept', 'application/json')
        .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
        .send(newProject)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .expect([{
          id: 6,
          project_name: 'Learn To Code Workshop Materials',
          github_url: 'https://github.com/danielmarcgardner/LearnToCode-HTML-CSS',
          deployed_url: 'N/A',
          description: 'My materials for my Learn To Code Workshop',
          picture: null,
          name: 'Daniel Gardner',
        }], done);
    });
    it('Throws an error when not all required fields are present', (done) => {
      const newProjectBadProject = {
        project_name: 'Learn To Code Workshop Materials',
        github_url: 'https://github.com/danielmarcgardner/LearnToCode-HTML-CSS',
      };
      request(app)
        .post('/api/projects')
        .set('Accept', 'application/json')
        .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
        .send(newProjectBadProject)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(400)
        .expect({ error: 'An Error has occured. Please Check you have all required fields' }, done);
    });
  });
  describe('PATCH /api/projects/:id', (done) => {
    it('Updates a specific project', (done) => {
      const editedProject = {
        id: 1,
        project_name: 'lvl^',
        github_url: 'https://github.com/danielmarcgardner/level-up',
        deployed_url: 'http://lvlup-galvanize.herokuapp.com/',
        description: 'This is my capstone project!!!',
        created_by: 1,
      };
      request(app)
        .patch('/api/projects/1')
        .set('Accept', 'application/json')
        .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
        .send(editedProject)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .expect([
          {
            id: 1,
            project_name: 'lvl^',
            github_url: 'https://github.com/danielmarcgardner/level-up',
            deployed_url: 'http://lvlup-galvanize.herokuapp.com/',
            description: 'This is my capstone project!!!',
            picture: null,
            name: 'Daniel Gardner',
          }], done);
    });
    it('Throws an error when given an id too high or too low', (done) => {
      const editedProject = {
        id: 1,
        project_name: 'lvl^',
        github_url: 'https://github.com/danielmarcgardner/level-up',
        deployed_url: 'http://lvlup-galvanize.herokuapp.com/',
        description: 'This is my capstone project!!!',
        created_by: 1,
      };
      request(app)
          .patch('/api/projects/500')
          .set('Accept', 'application/json')
          .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
          .send(editedProject)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect(400, JSON.stringify('Error with your request. Please check that you have the right id.'), done);
    });
    it('Throw an error if sending a bad body request', (done) => {
      const updated = {
        bad: 'Not Good',
        nope: 'Not Good',
      };
      request(app)
      .patch('/api/projects/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(updated)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .expect({ error: 'Error with your request. Please check the body of your request.' }, done);
    });
  });
});
