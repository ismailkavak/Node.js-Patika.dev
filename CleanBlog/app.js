const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const ejs = require('ejs');
const Post = require('./models/Post');
const postController = require('./controller/postControllers');
const pageController = require('./controller/pageController');

mongoose.connect('mongodb+srv://poyraz:PtuB19QLoN0vVNjD@cluster0.aavsy.mongodb.net/')
.then(() => {
  console.log("DB CONNECTED!")
}).catch((err) => {
  console.log("FAILED CONNECT!")
});

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
// ROUTES
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/index', pageController.indexPage);
app.get('/about', pageController.aboutPage);
app.get('/post', pageController.postPage);
app.get('/add_post', pageController.addPostPage);
app.get('/posts/edit/:id', pageController.editPage);

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
