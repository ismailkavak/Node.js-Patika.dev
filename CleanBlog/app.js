const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const app = express();
const ejs = require('ejs');
const Post = require('./models/Post');


mongoose.connect('mongodb://localhost/cleanblog-test-db');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

// ROUTES
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
});

app.get('/index', (req, res) => {
  res.redirect('/');
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
  await Post.create(req.body);
  res.redirect('/');
});

app.get('/posts/edit/:id', async (req, res) => {
  const post = await Post.findOne({ _id : req.params.id})
  res.render('edit', {
    post
  })
})

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
