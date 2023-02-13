const express = require("express");
let ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/addnew", function (req, res) {
  res.render("add_post");
});

app.get("/post", function (req, res) {
  res.render("post");
});

port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı!`);
});
