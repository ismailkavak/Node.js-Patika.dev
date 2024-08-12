const express = require('express');
const mongoose = require('mongoose');

const app = express();
const ejs = require('ejs');
const Post = require('./models/Post')

mongoose.connect('mongodb://localhost/cleanblog-test-db');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index', {
    posts
  });
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body)
  res.redirect('/');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
