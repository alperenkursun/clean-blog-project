const express = require("express");
const mongoose = require("mongoose");

let ejs = require("ejs");

const Blog = require("./models/Blog");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/clean-test-db");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const blog = await Blog.find({});
  res.render("index", {
    blog,
  });
});

app.get("/post/:id", async function (req, res) {
  const id = req.params.id;
  const post = await Blog.findById(id);
  res.render("post", { post });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/addnew", function (req, res) {
  res.render("add_post");
});

app.post("/blog", async (req, res) => {
  await Blog.create(req.body);
  res.redirect("/");
});

port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı!`);
});
