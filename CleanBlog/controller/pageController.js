const Post = require('../models/Post');

exports.indexPage = (req, res) => {
  res.redirect('/');
};

exports.aboutPage = (req, res) => {
  res.render('about');
};

exports.postPage = (req, res) => {
  res.render('post');
};

exports.addPostPage = (req, res) => {
  res.render('add_post');
};

exports.editPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
};
