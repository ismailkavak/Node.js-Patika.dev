const express = require('express');
const app = express();
const ejs = require('ejs')

// TEMPLATE ENGINE
app.set("view engine", "ejs")

// MIDDLEWARE
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
  res.render('index');
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

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});