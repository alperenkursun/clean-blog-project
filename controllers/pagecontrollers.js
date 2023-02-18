const Blog = require("../models/blog.js");

exports.getAboutPage = function (req, res) {
  res.render("about");
};

exports.getAddPage = function (req, res) {
  res.render("add_post");
};

exports.getEditPage = async function (req, res) {
  const post = await Blog.findOne({ _id: req.params.id });
  console.log(post);
  res.render("edit_post", { post });
};
