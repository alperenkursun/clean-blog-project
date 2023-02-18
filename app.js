const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const app = express();
const BlogControllers = require("./controllers/blogcontrollers");
const PageControllers = require("./controllers/pagecontrollers");

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://clean-blog-user:EzqoDtC31Uca7B0A@cluster0.p502xvg.mongodb.net/clean-test-db"
);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.get("/", BlogControllers.getAllPost);
app.get("/post/:id", BlogControllers.getPost);
app.post("/blog", BlogControllers.createPost);
app.put("/post/:id", BlogControllers.updatePost);
app.delete("/post/:id", BlogControllers.deletePost);

app.get("/about", PageControllers.getAboutPage);
app.get("/addnew", PageControllers.getAddPage);
app.get("/post/edit/:id", PageControllers.getEditPage);

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı!`);
});
