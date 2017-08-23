const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const login = require('./routes/login.js');
const signup = require('./routes/signup.js');
const projects = require('./routes/projects.js');
const blogPosts = require('./routes/blog-posts.js');
const articles = require('./routes/published-articles.js');
const tags = require('./routes/tags.js');
const signout = require('./routes/signout.js');
const verifyLoggedIn = require('./middleware/auth.js');

const app = express();
const PORT = process.env.PORT || 3000;

 /* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
 /* istanbul ignore next */
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', login);
app.use('/api', signup);

// To Check for if user is loggedin

app.post('/api/blogposts', verifyLoggedIn);
app.patch('/api/blogposts/:id', verifyLoggedIn);
app.post('/api/projects', verifyLoggedIn);
app.patch('/api/projects/:id', verifyLoggedIn);
app.post('/api/articles', verifyLoggedIn);
app.patch('/api/articles/:id', verifyLoggedIn);
app.post('/api/tags', verifyLoggedIn);
app.post('/api/tags/blog', verifyLoggedIn);

app.use('/api', projects);
app.use('/api', blogPosts);
app.use('/api', articles);
app.use('/api', tags);
app.use('/api/', signout);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;
