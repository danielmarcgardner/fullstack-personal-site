exports.seed = function (knex, Promise) {
  return knex('blog_posts').del()
  .then(() => knex('blog_posts').insert([
    {
      id: 1,
      title: 'My First Blog Post!',
      content: "Scenester tote bag cornhole art party wayfarers palo santo plaid semiotics sriracha vinyl. Ugh paleo DIY four loko, pickled humblebrag banjo sartorial sustainable adaptogen kickstarter blog pork belly bicycle rights iPhone. Kickstarter offal tousled kogi, meggings iceland pug viral PBR&B put a bird on it etsy mixtape. Poke 8-bit chicharrones raclette bitters ethical lumbersexual aesthetic pug. Lyft fam air plant marfa drinking vinegar authentic man braid occupy intelligentsia vegan 8-bit poutine. Fingerstache cronut drinking vinegar four dollar toast etsy readymade mlkshk microdosing thundercats. Taiyaki yuccie snackwave tote bag, direct trade glossier quinoa paleo. Cardigan adaptogen truffaut brunch. Skateboard tousled readymade, glossier health goth ethical wayfarers cloud bread heirloom roof party art party polaroid jean shorts. Jianbing iPhone fam twee. Portland enamel pin +1 four loko, farm-to-table sartorial tumblr heirloom 3 wolf moon cred. Farm-to-table salvia you probably haven't heard of them, meditation yuccie church-key art party green juice selvage. Ennui hot chicken meh vexillologist leggings brunch. Knausgaard squid kitsch schlitz wolf microdosing tofu tumeric before they sold out twee unicorn raw denim seitan air plant. Tousled yuccie edison bulb flexitarian green juice.Vexillologist woke offal tacos disrupt. Vaporware occupy scenester schlitz chicharrones mixtape ennui brooklyn deep v cornhole VHS wayfarers tote bag. Gentrify hashtag messenger bag bitters, humblebrag bespoke fam forage echo park godard hoodie affogato. Meditation hoodie tbh, succulents irony af lo-fi venmo williamsburg la croix gluten-free pok pok. Snackwave gentrify keffiyeh, etsy next level vape vexillologist tote bag dreamcatcher swag you probably haven't heard of them pinterest. Four dollar toast subway tile crucifix etsy mustache. Occupy gochujang crucifix, mustache DIY iceland taxidermy freegan. 90's heirloom master cleanse try-hard offal edison bulb, cardigan poke ethical kombucha pinterest poutine. 8-bit kogi etsy neutra. Shoreditch 3 wolf moon taxidermy salvia, offal godard narwhal woke tattooed tumblr shaman mixtape. Bushwick godard 90's copper mug direct trade bicycle rights. Lomo single-origin coffee food truck street art meh. Mixtape tbh sustainable squid. Williamsburg hell of DIY put a bird on it lumbersexual, quinoa twee tacos organic meggings shabby chic wolf plaid. Hot chicken keytar readymade, PBR&B shoreditch you probably haven't heard of them locavore poke subway tile wolf humblebrag pinterest poutine artisan iceland. Palo santo selfies brooklyn master cleanse hot chicken green juice live-edge gochujang snackwave. Williamsburg succulents put a bird on it you probably haven't heard of them, pour-over migas knausgaard. Tousled edison bulb cornhole, pabst photo booth ethical craft beer shabby chic green juice freegan tattooed tumblr bushwick artisan. Celiac poke synth vinyl raclette intelligentsia messenger bag air plant disrupt vice cred neutra pug pinterest kale chips. Air plant vexillologist lomo, plaid literally tacos mumblecore. Semiotics bushwick mlkshk chicharrones lyft single-origin coffee tumblr prism ramps before they sold out. Subway tile post-ironic raclette crucifix tousled. Messenger bag post-ironic marfa mixtape yr pickled cardigan tofu tumeric. Chicharrones bitters godard gochujang, shaman hot chicken waistcoat cray iceland cold-pressed messenger bag drinking vinegar twee fixie af. Squid portland scenester, 3 wolf moon bicycle rights franzen viral drinking vinegar next level XOXO blog copper mug tousled. Pitchfork roof party truffaut quinoa vexillologist XOXO art party fingerstache. Flexitarian heirloom stumptown typewriter, food truck pinterest cray offal gochujang hoodie mixtape schlitz af wolf. Farm-to-table pitchfork lumbersexual portland literally. Ramps readymade salvia subway tile, hot chicken mixtape lo-fi sustainable before they sold out pickled iceland. Tote bag small batch try-hard vape swag selvage twee seitan offal. 8-bit glossier raclette, schlitz stumptown succulents VHS cliche seitan selvage keffiyeh cornhole fanny pack blog cardigan. Meh austin helvetica twee. Mixtape before they sold out XOXO, ramps tilde bicycle rights cloud bread kitsch stumptown leggings biodiesel typewriter portland. Irony vice tumeric street art marfa coloring book trust fund before they sold out paleo tofu asymmetrical pork belly thundercats. Pok pok ethical art party poutine marfa kogi succulents keytar four loko disrupt chambray craft beer schlitz. Trust fund hoodie bespoke locavore, irony bitters mustache health goth lumbersexual pop-up cronut.",
      author: 1,
    },
    {
      id: 2,
      title: 'My Second Blog Post!',
      content: 'Trust fund before they sold out venmo taxidermy fixie meh freegan pour-over brunch. DIY gochujang celiac, fingerstache health goth leggings messenger bag. Raclette pabst fingerstache flexitarian man braid photo booth before they sold out. Tofu bushwick kale chips, neutra activated charcoal VHS meh tumeric church-key pinterest kickstarter meggings tilde coloring book. Gluten-free prism vaporware raclette tofu pinterest. Activated charcoal everyday carry selfies, whatever blue bottle chillwave iPhone kale chips. Semiotics twee vegan, pork belly vexillologist chillwave slow-carb raw denim irony hammock PBR&B chia pour-over literally. Lyft sustainable vegan palo santo. Snackwave chartreuse chillwave tilde, whatever heirloom ennui pinterest vaporware tote bag live-edge typewriter ugh. Asymmetrical affogato gochujang lomo ugh, artisan trust fund. Narwhal scenester subway tile vinyl, chia cornhole four loko locavore pop-up cloud bread. Photo booth occupy next level food truck tilde selvage dreamcatcher hammock gastropub. Brooklyn pork belly edison bulb butcher, prism selfies paleo small batch banjo. Kitsch pug normcore man bun direct trade hell of. DIY messenger bag scenester kinfolk pitchfork semiotics, jean shorts knausgaard actually readymade next level paleo. Chartreuse direct trade small batch cliche, hammock ramps af squid organic austin venmo mixtape williamsburg kickstarter taiyaki. Humblebrag vaporware occupy, chillwave 8-bit aesthetic woke. Church-key selfies locavore, tacos irony raclette direct trade plaid pork belly mumblecore keffiyeh cray hot chicken cloud bread. Vice marfa craft beer art party air plant. Vegan wolf vice glossier direct trade put a bird on it. Hoodie palo santo seitan chia retro, snackwave fanny pack typewriter la croix dreamcatcher fashion axe jianbing kale chips twee. Williamsburg bicycle rights letterpress pabst godard venmo, cloud bread migas drinking vinegar.',
      author: 1,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'blog_posts_id_seq\', (SELECT MAX(id) FROM blog_posts))'));
};
