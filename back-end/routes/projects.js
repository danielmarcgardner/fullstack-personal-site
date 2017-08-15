const express = require('express');
const router = express.Router();

router.route('/projects')
  .get((req, res) => {
    const knex = require('../knex.js');
    return knex('projects')
    .join('users', 'users.id', '=', 'projects.created_by')
    .select('projects.id', 'projects.project_name', 'projects.github_url', 'projects.deployed_url', 'projects.description', 'users.name')
    .orderBy('id', 'asc')
    .then(projects => res.status(200).json(projects));
  })

  .post((req, res) => {
    const knex = require('../knex.js');
    const newProject = {
      project_name: req.body.project_name,
      github_url: req.body.github_url,
      deployed_url: req.body.deployed_url,
      picture: req.body.picture,
      description: req.body.description,
      created_by: Number(req.body.created_by),
    };
    return knex('projects').insert(newProject, '*')
    .then(project => knex('projects')
      .join('users', 'users.id', '=', 'projects.created_by')
      .select('projects.id', 'projects.project_name', 'projects.github_url', 'projects.deployed_url', 'projects.description', 'projects.picture', 'users.name')
      .where('projects.id', project[0].id)
      .orderBy('id', 'asc'))
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(400).json({ error: 'An Error has occured. Please Check you have all required fields' }));
  });

router.route('/projects/:id')
  .get((req, res) => {
    const knex = require('../knex.js');
    return knex('projects')
    .join('users', 'users.id', '=', 'projects.created_by')
    .select('projects.id', 'projects.project_name', 'projects.github_url', 'projects.deployed_url', 'projects.description', 'users.name')
    .where('projects.id', Number(req.params.id))
    .orderBy('id', 'asc')
    .then((projects) => {
      if (projects.length === 0) {
        return res.status(400).end({ error: 'An Error has occured. Please Check to make sure you are selecting a valid blog post' });
      }
      return res.status(200).json(projects);
    })
    .catch(err => res.status(400).json({ error: 'An Error has occured. Please Check to make sure you are selecting a valid blog post' }));
  })
  .patch((req, res) => {
    const knex = require('../knex.js');
    return knex('projects').max('id')
    .then((maxNum) => {
      if (maxNum[0].max < Number(req.params.id) || Number(req.params.id) < 0) {
        return res.status(400).json('Error with your request. Please check that you have the right id.');
      }
      return knex('projects')
        .join('users', 'users.id', '=', 'projects.created_by')
        .select('projects.id', 'projects.project_name', 'projects.github_url', 'projects.deployed_url', 'projects.description', 'users.name')
        .where('projects.id', Number(req.params.id))
        .update(req.body)
        .then(project => knex('projects')
        .join('users', 'users.id', '=', 'projects.created_by')
        .select('projects.id', 'projects.project_name', 'projects.github_url', 'projects.deployed_url', 'projects.description', 'projects.picture', 'users.name')
        .where('projects.id', project)
        .orderBy('id', 'asc'))
        .then((updatedProject) => {
          res.status(200).json(updatedProject);
        })
        .catch((err) => {
          res.status(400).json({ error: 'Error with your request. Please check the body of your request.' });
        });
    });
  });


module.exports = router;
