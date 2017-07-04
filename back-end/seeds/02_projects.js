exports.seed = function (knex, Promise) {
  return knex('projects').del()
  .then(() => knex('projects').insert([
    {
      id: 1,
      project_name: 'lvl^',
      github_url: 'https://github.com/danielmarcgardner/level-up',
      deployed_url: 'http://lvlup-galvanize.herokuapp.com/',
      description: 'lvl^ is a gamified education enrichment platform for students currently enrolled in a Galvanize immersive learning program. The lvl^ web app is a full-stack web application that gives students and administrators an interface to participate in the reward based platform designed to help students reach their career goals. Students are provided with challenges and rewards which fall into four categories: education, community, career and life. These challenges give students an opportunity to complete tasks that will contribute to their growth in the respective categories. Examples of challenges include: mentoring a student in a junior cohort, conducting informational interviews, building a side project, or writing a LinkedIn/Medium article. Students earn points for completing challenges which can be cashed in for rewards. Rewards can include 30 minutes of paired programming with an instructor, a ticket to a Galvanize community lunch, business cards, or a $5 gift card to the cafe.',
      created_by: 1,
    },
    {
      id: 2,
      project_name: 'CheeSwhiz',
      github_url: 'https://github.com/danielmarcgardner/CheeSwhiz',
      deployed_url: 'http://cheeswhiz.herokuapp.com/api-docs/',
      description: 'CheeSwhiz is an api that allows users to get information about Cheese. CheeSwhiz has 3 levels of users: non-logged in, registered users, and super-users. All users can view all cheeses in the database; add a cheese to the database; search for cheeses by name, animal milk, firmness; find a substitute cheese; randomly generate a cheese; and find a local cheese store. Everyone can log in or create a basic account with CheeSwhiz. Registered users can save favorite cheeses, add notes to their favorite cheeses, and delete favorites. Lastly there are super-users (@danielmarcgardner and @reidPD) who can update cheeses in the database as well as delete them.',
      created_by: 1,
    },
    {
      id: 3,
      project_name: 'Trucking Around',
      github_url: 'https://github.com/danielmarcgardner/CheeSwhiz',
      deployed_url: 'http://truckingaround.surge.sh/',
      description: 'Rather than searching through twitter or facebook for updates on trucks, Trucking Around lets users search by location in SF using distance and day of the week filters. The search returns the trucks on the map as well as a side panel where users can get more information about the trucks, add and remove favorites, as well as get directions to the truck.',
      created_by: 1,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'projects_id_seq\', (SELECT MAX(id) FROM projects))'));
};
