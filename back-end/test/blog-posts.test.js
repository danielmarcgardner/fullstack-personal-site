const request = require('supertest');
const app = require('../app');
const knex = require('../knex');
const expect = require('chai').expect;
const sorterOfBlogs = require('../helpers/blog_tags_helper');

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

describe('#Blog Posts', (done) => {
  describe('GET /api/blogposts', (done) => {
    it('Retrieves all blog posts from the database with tags', (done) => {
      request(app)
        .get('/api/blogposts')
        .set('Accept', 'application/json')
        // .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .expect([
          {
            id: 1,
            blogTitle: 'My First Blog Post!',
            text: "Scenester tote bag cornhole art party wayfarers palo santo plaid semiotics sriracha vinyl. Ugh paleo DIY four loko, pickled humblebrag banjo sartorial sustainable adaptogen kickstarter blog pork belly bicycle rights iPhone. Kickstarter offal tousled kogi, meggings iceland pug viral PBR&B put a bird on it etsy mixtape. Poke 8-bit chicharrones raclette bitters ethical lumbersexual aesthetic pug. Lyft fam air plant marfa drinking vinegar authentic man braid occupy intelligentsia vegan 8-bit poutine. Fingerstache cronut drinking vinegar four dollar toast etsy readymade mlkshk microdosing thundercats. Taiyaki yuccie snackwave tote bag, direct trade glossier quinoa paleo. Cardigan adaptogen truffaut brunch. Skateboard tousled readymade, glossier health goth ethical wayfarers cloud bread heirloom roof party art party polaroid jean shorts. Jianbing iPhone fam twee. Portland enamel pin +1 four loko, farm-to-table sartorial tumblr heirloom 3 wolf moon cred. Farm-to-table salvia you probably haven't heard of them, meditation yuccie church-key art party green juice selvage. Ennui hot chicken meh vexillologist leggings brunch. Knausgaard squid kitsch schlitz wolf microdosing tofu tumeric before they sold out twee unicorn raw denim seitan air plant. Tousled yuccie edison bulb flexitarian green juice.Vexillologist woke offal tacos disrupt. Vaporware occupy scenester schlitz chicharrones mixtape ennui brooklyn deep v cornhole VHS wayfarers tote bag. Gentrify hashtag messenger bag bitters, humblebrag bespoke fam forage echo park godard hoodie affogato. Meditation hoodie tbh, succulents irony af lo-fi venmo williamsburg la croix gluten-free pok pok. Snackwave gentrify keffiyeh, etsy next level vape vexillologist tote bag dreamcatcher swag you probably haven't heard of them pinterest. Four dollar toast subway tile crucifix etsy mustache. Occupy gochujang crucifix, mustache DIY iceland taxidermy freegan. 90's heirloom master cleanse try-hard offal edison bulb, cardigan poke ethical kombucha pinterest poutine. 8-bit kogi etsy neutra. Shoreditch 3 wolf moon taxidermy salvia, offal godard narwhal woke tattooed tumblr shaman mixtape. Bushwick godard 90's copper mug direct trade bicycle rights. Lomo single-origin coffee food truck street art meh. Mixtape tbh sustainable squid. Williamsburg hell of DIY put a bird on it lumbersexual, quinoa twee tacos organic meggings shabby chic wolf plaid. Hot chicken keytar readymade, PBR&B shoreditch you probably haven't heard of them locavore poke subway tile wolf humblebrag pinterest poutine artisan iceland. Palo santo selfies brooklyn master cleanse hot chicken green juice live-edge gochujang snackwave. Williamsburg succulents put a bird on it you probably haven't heard of them, pour-over migas knausgaard. Tousled edison bulb cornhole, pabst photo booth ethical craft beer shabby chic green juice freegan tattooed tumblr bushwick artisan. Celiac poke synth vinyl raclette intelligentsia messenger bag air plant disrupt vice cred neutra pug pinterest kale chips. Air plant vexillologist lomo, plaid literally tacos mumblecore. Semiotics bushwick mlkshk chicharrones lyft single-origin coffee tumblr prism ramps before they sold out. Subway tile post-ironic raclette crucifix tousled. Messenger bag post-ironic marfa mixtape yr pickled cardigan tofu tumeric. Chicharrones bitters godard gochujang, shaman hot chicken waistcoat cray iceland cold-pressed messenger bag drinking vinegar twee fixie af. Squid portland scenester, 3 wolf moon bicycle rights franzen viral drinking vinegar next level XOXO blog copper mug tousled. Pitchfork roof party truffaut quinoa vexillologist XOXO art party fingerstache. Flexitarian heirloom stumptown typewriter, food truck pinterest cray offal gochujang hoodie mixtape schlitz af wolf. Farm-to-table pitchfork lumbersexual portland literally. Ramps readymade salvia subway tile, hot chicken mixtape lo-fi sustainable before they sold out pickled iceland. Tote bag small batch try-hard vape swag selvage twee seitan offal. 8-bit glossier raclette, schlitz stumptown succulents VHS cliche seitan selvage keffiyeh cornhole fanny pack blog cardigan. Meh austin helvetica twee. Mixtape before they sold out XOXO, ramps tilde bicycle rights cloud bread kitsch stumptown leggings biodiesel typewriter portland. Irony vice tumeric street art marfa coloring book trust fund before they sold out paleo tofu asymmetrical pork belly thundercats. Pok pok ethical art party poutine marfa kogi succulents keytar four loko disrupt chambray craft beer schlitz. Trust fund hoodie bespoke locavore, irony bitters mustache health goth lumbersexual pop-up cronut.",
            author: 'Daniel Gardner',
            tags: [
              'Javascript',
              'Technology',
              'React',
              'Front End',
              'Life',
              'Career',
            ],
          },
          {
            id: 2,
            blogTitle: 'My Second Blog Post!',
            text: 'Trust fund before they sold out venmo taxidermy fixie meh freegan pour-over brunch. DIY gochujang celiac, fingerstache health goth leggings messenger bag. Raclette pabst fingerstache flexitarian man braid photo booth before they sold out. Tofu bushwick kale chips, neutra activated charcoal VHS meh tumeric church-key pinterest kickstarter meggings tilde coloring book. Gluten-free prism vaporware raclette tofu pinterest. Activated charcoal everyday carry selfies, whatever blue bottle chillwave iPhone kale chips. Semiotics twee vegan, pork belly vexillologist chillwave slow-carb raw denim irony hammock PBR&B chia pour-over literally. Lyft sustainable vegan palo santo. Snackwave chartreuse chillwave tilde, whatever heirloom ennui pinterest vaporware tote bag live-edge typewriter ugh. Asymmetrical affogato gochujang lomo ugh, artisan trust fund. Narwhal scenester subway tile vinyl, chia cornhole four loko locavore pop-up cloud bread. Photo booth occupy next level food truck tilde selvage dreamcatcher hammock gastropub. Brooklyn pork belly edison bulb butcher, prism selfies paleo small batch banjo. Kitsch pug normcore man bun direct trade hell of. DIY messenger bag scenester kinfolk pitchfork semiotics, jean shorts knausgaard actually readymade next level paleo. Chartreuse direct trade small batch cliche, hammock ramps af squid organic austin venmo mixtape williamsburg kickstarter taiyaki. Humblebrag vaporware occupy, chillwave 8-bit aesthetic woke. Church-key selfies locavore, tacos irony raclette direct trade plaid pork belly mumblecore keffiyeh cray hot chicken cloud bread. Vice marfa craft beer art party air plant. Vegan wolf vice glossier direct trade put a bird on it. Hoodie palo santo seitan chia retro, snackwave fanny pack typewriter la croix dreamcatcher fashion axe jianbing kale chips twee. Williamsburg bicycle rights letterpress pabst godard venmo, cloud bread migas drinking vinegar.',
            author: 'Daniel Gardner',
            tags: [
              'Javascript',
            ],
          },
        ], done);
    });
  });
  describe('GET /api/blogposts/:id', (done) => {
    it('Retrieves a blogpost at a specific id', (done) => {
      request(app)
      .get('/api/blogposts/1')
      .set('Accept', 'application/json')
      // .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([
        {
          id: 1,
          blogTitle: 'My First Blog Post!',
          text: "Scenester tote bag cornhole art party wayfarers palo santo plaid semiotics sriracha vinyl. Ugh paleo DIY four loko, pickled humblebrag banjo sartorial sustainable adaptogen kickstarter blog pork belly bicycle rights iPhone. Kickstarter offal tousled kogi, meggings iceland pug viral PBR&B put a bird on it etsy mixtape. Poke 8-bit chicharrones raclette bitters ethical lumbersexual aesthetic pug. Lyft fam air plant marfa drinking vinegar authentic man braid occupy intelligentsia vegan 8-bit poutine. Fingerstache cronut drinking vinegar four dollar toast etsy readymade mlkshk microdosing thundercats. Taiyaki yuccie snackwave tote bag, direct trade glossier quinoa paleo. Cardigan adaptogen truffaut brunch. Skateboard tousled readymade, glossier health goth ethical wayfarers cloud bread heirloom roof party art party polaroid jean shorts. Jianbing iPhone fam twee. Portland enamel pin +1 four loko, farm-to-table sartorial tumblr heirloom 3 wolf moon cred. Farm-to-table salvia you probably haven't heard of them, meditation yuccie church-key art party green juice selvage. Ennui hot chicken meh vexillologist leggings brunch. Knausgaard squid kitsch schlitz wolf microdosing tofu tumeric before they sold out twee unicorn raw denim seitan air plant. Tousled yuccie edison bulb flexitarian green juice.Vexillologist woke offal tacos disrupt. Vaporware occupy scenester schlitz chicharrones mixtape ennui brooklyn deep v cornhole VHS wayfarers tote bag. Gentrify hashtag messenger bag bitters, humblebrag bespoke fam forage echo park godard hoodie affogato. Meditation hoodie tbh, succulents irony af lo-fi venmo williamsburg la croix gluten-free pok pok. Snackwave gentrify keffiyeh, etsy next level vape vexillologist tote bag dreamcatcher swag you probably haven't heard of them pinterest. Four dollar toast subway tile crucifix etsy mustache. Occupy gochujang crucifix, mustache DIY iceland taxidermy freegan. 90's heirloom master cleanse try-hard offal edison bulb, cardigan poke ethical kombucha pinterest poutine. 8-bit kogi etsy neutra. Shoreditch 3 wolf moon taxidermy salvia, offal godard narwhal woke tattooed tumblr shaman mixtape. Bushwick godard 90's copper mug direct trade bicycle rights. Lomo single-origin coffee food truck street art meh. Mixtape tbh sustainable squid. Williamsburg hell of DIY put a bird on it lumbersexual, quinoa twee tacos organic meggings shabby chic wolf plaid. Hot chicken keytar readymade, PBR&B shoreditch you probably haven't heard of them locavore poke subway tile wolf humblebrag pinterest poutine artisan iceland. Palo santo selfies brooklyn master cleanse hot chicken green juice live-edge gochujang snackwave. Williamsburg succulents put a bird on it you probably haven't heard of them, pour-over migas knausgaard. Tousled edison bulb cornhole, pabst photo booth ethical craft beer shabby chic green juice freegan tattooed tumblr bushwick artisan. Celiac poke synth vinyl raclette intelligentsia messenger bag air plant disrupt vice cred neutra pug pinterest kale chips. Air plant vexillologist lomo, plaid literally tacos mumblecore. Semiotics bushwick mlkshk chicharrones lyft single-origin coffee tumblr prism ramps before they sold out. Subway tile post-ironic raclette crucifix tousled. Messenger bag post-ironic marfa mixtape yr pickled cardigan tofu tumeric. Chicharrones bitters godard gochujang, shaman hot chicken waistcoat cray iceland cold-pressed messenger bag drinking vinegar twee fixie af. Squid portland scenester, 3 wolf moon bicycle rights franzen viral drinking vinegar next level XOXO blog copper mug tousled. Pitchfork roof party truffaut quinoa vexillologist XOXO art party fingerstache. Flexitarian heirloom stumptown typewriter, food truck pinterest cray offal gochujang hoodie mixtape schlitz af wolf. Farm-to-table pitchfork lumbersexual portland literally. Ramps readymade salvia subway tile, hot chicken mixtape lo-fi sustainable before they sold out pickled iceland. Tote bag small batch try-hard vape swag selvage twee seitan offal. 8-bit glossier raclette, schlitz stumptown succulents VHS cliche seitan selvage keffiyeh cornhole fanny pack blog cardigan. Meh austin helvetica twee. Mixtape before they sold out XOXO, ramps tilde bicycle rights cloud bread kitsch stumptown leggings biodiesel typewriter portland. Irony vice tumeric street art marfa coloring book trust fund before they sold out paleo tofu asymmetrical pork belly thundercats. Pok pok ethical art party poutine marfa kogi succulents keytar four loko disrupt chambray craft beer schlitz. Trust fund hoodie bespoke locavore, irony bitters mustache health goth lumbersexual pop-up cronut.",
          author: 'Daniel Gardner',
          tags: [
            'Javascript',
            'Technology',
            'React',
            'Front End',
            'Life',
            'Career',
          ],
        },
      ], done);
    });
    it('Should throw an error when the post does not exist', (done) => {
      const errorPost = {
        title: 'This post has an error!!!',
        author: 1,
        content: 'ERROR!!!!!!!!!!!!!!!!!',
      };
      request(app)
      .get('/api/blogposts/500')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(errorPost)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .expect({ error: 'An Error has occured. Please Check to make sure you are selecting a valid blog post' }, done);
    });
  });
  describe('POST /api/blogposts', (done) => {
    it('Adds a new blogpost to the database', (done) => {
      const newPost = {
        title: 'My Third Post!',
        author: 1,
        content: 'Leggings iPhone salvia dreamcatcher, brooklyn shoreditch biodiesel actually helvetica PBR&B master cleanse. Biodiesel adaptogen post-ironic retro hashtag, health goth schlitz iPhone drinking vinegar occupy gentrify pitchfork keffiyeh. Deep v post-ironic flannel, iceland heirloom echo park kombucha man braid gluten-free blog 3 wolf moon aesthetic. Distillery pok pok pickled fam, jean shorts kale chips PBR&B plaid. Biodiesel polaroid squid authentic distillery. Etsy cliche disrupt, seitan hexagon hashtag squid salvia blog cred. Poke viral truffaut austin. Meh post-ironic kickstarter vinyl humblebrag prism freegan cardigan meditation actually narwhal pickled you probably havent heard of them. VHS poutine chambray plaid franzen taiyaki XOXO bicycle rights thundercats lo-fi organic you probably havent heard of them. Glossier pour-over austin poutine raclette lo-fi single-origin coffee yuccie microdosing readymade irony try-hard YOLO. Tofu hexagon stumptown direct trade authentic. Meh kogi selvage palo santo butcher tousled snackwave. Church-key waistcoat intelligentsia leggings tumeric yr austin kale chips bushwick next level pop-up four dollar toast. Food truck paleo raw denim vegan hammock taxidermy chia occupy pitchfork dreamcatcher tote bag hot chicken activated charcoal seitan glossier.',
        tags: [1, 2],
      };
      request(app)
      .post('/api/blogposts')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(newPost)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([
        {
          id: 3,
          blogTitle: 'My Third Post!',
          text: 'Leggings iPhone salvia dreamcatcher, brooklyn shoreditch biodiesel actually helvetica PBR&B master cleanse. Biodiesel adaptogen post-ironic retro hashtag, health goth schlitz iPhone drinking vinegar occupy gentrify pitchfork keffiyeh. Deep v post-ironic flannel, iceland heirloom echo park kombucha man braid gluten-free blog 3 wolf moon aesthetic. Distillery pok pok pickled fam, jean shorts kale chips PBR&B plaid. Biodiesel polaroid squid authentic distillery. Etsy cliche disrupt, seitan hexagon hashtag squid salvia blog cred. Poke viral truffaut austin. Meh post-ironic kickstarter vinyl humblebrag prism freegan cardigan meditation actually narwhal pickled you probably havent heard of them. VHS poutine chambray plaid franzen taiyaki XOXO bicycle rights thundercats lo-fi organic you probably havent heard of them. Glossier pour-over austin poutine raclette lo-fi single-origin coffee yuccie microdosing readymade irony try-hard YOLO. Tofu hexagon stumptown direct trade authentic. Meh kogi selvage palo santo butcher tousled snackwave. Church-key waistcoat intelligentsia leggings tumeric yr austin kale chips bushwick next level pop-up four dollar toast. Food truck paleo raw denim vegan hammock taxidermy chia occupy pitchfork dreamcatcher tote bag hot chicken activated charcoal seitan glossier.',
          author: 'Daniel Gardner',
          tags: [
            'Javascript',
            'Technology',
          ],
        },
      ], done);
    });
    it('Should throw an error without an tags', (done) => {
      const newPost = {
        title: 'This post has an error!!!',
        author: 1,
        tags: [
          'Javascript',
          'Technology',
        ],
      };
      request(app)
      .post('/api/blogposts')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(newPost)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .expect({ error: 'An Error has occured. Please Check to make sure the article has all required fields' }, done);
    });
    it('Should throw an error without other required fields', (done) => {
      const errorPost = {
        title: 'This post has an error!!!',
        author: 1,
        content: 'ERROR!!!!!!!!!!!!!!!!!',
      };
      request(app)
      .post('/api/blogposts')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(errorPost)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .expect({ error: 'An Error has occured. Please Check to make sure the article has all required fields' }, done);
    });
  });
  describe('PATCH /api/blogposts/:id', (done) => {
    it('Updates a blog post at a given id', (done) => {
      const updatedPost = {
        title: 'My First Post!',
        author: 1,
        content: 'NEW TEXT!!!!!',
      };
      request(app)
      .patch('/api/blogposts/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(updatedPost)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([{
        id: 1,
        blogTitle: 'My First Post!',
        author: 'Daniel Gardner',
        text: 'NEW TEXT!!!!!',
        tags:
        ['Javascript',
          'Technology',
          'React',
          'Front End',
          'Life',
          'Career'],
      }], done);
    });
    it('Should throw an error when the post does not exist', (done) => {
      const errorPost = {
        title: 'This post has an error!!!',
        author: 1,
        content: 'ERROR!!!!!!!!!!!!!!!!!',
      };
      request(app)
      .patch('/api/blogposts/500')
      .set('Accept', 'application/json')
      .set('Cookie', 'dgAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDI4MjIyOTAsImV4cCI6MTUwMzQyNzA5MH0.1L7v23Q6t0VWx8P59gJO5rFqPDq5y3FdcEVA6EdI7OI')
      .send(errorPost)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .expect({ error: 'An Error has occured. Please Check to make sure you are selecting a valid blog post' }, done);
    });
  });
});
