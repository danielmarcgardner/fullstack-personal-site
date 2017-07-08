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
      github_url: 'https://github.com/danielmarcgardner/Trucking-Around',
      deployed_url: 'http://truckingaround.surge.sh/',
      description: 'Rather than searching through twitter or facebook for updates on trucks, Trucking Around lets users search by location in SF using distance and day of the week filters. The search returns the trucks on the map as well as a side panel where users can get more information about the trucks, add and remove favorites, as well as get directions to the truck.',
      created_by: 1,
    },
    {
      id: 4,
      project_name: 'gHoodies',
      github_url: 'https://github.com/danielmarcgardner/gHoodies',
      deployed_url: 'https://ghoodies.herokuapp.com/',
      description: 'gHoodies was born from a challenge from an instructor to students who wanted their galvanize hoodies before graduation. The instructor challenged those who were interested to build a basic fullstack app he could show school administrators and if it worked the cohort would get their hoodies earlier.gHoodies allows current Galvanize Students to search and see if they are in the database. If the student is not they can fill out their information to be added along with sizing specifications. If a student is already in the database they can make changes if needed. To view all records by cohort there is a `View Reports` button that generates the information. Galvanize loved the app and gave all students in the cohort their sweatshirts early. gHoodies is built with HTML, CSS, Materialize, Javascript, jQuery, Node.js, Express, Postgesql, and knex. gSwag lead on the Front-End by Thomas Stang (@tkstang) and on the Back-End by Daniel Gardner (@danielmarcgardner) with contributions by Randall Spencer (@holdonowgo), Matt Muir (@Mattimus333), and Ryan Thissen (@ryanthissen).',
      created_by: 1,
    },
    {
      id: 5,
      project_name: 'This Fullstack Personal Blog Site!',
      github_url: 'https://github.com/danielmarcgardner/fullstack-personal-site',
      deployed_url: 'http://danielmarcgardner.com',
      description: 'My personal website! I challenged myself to make a full stack website that included a blog to show off my development skills.',
      created_by: 1,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'projects_id_seq\', (SELECT MAX(id) FROM projects))'));
};
