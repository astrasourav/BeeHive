const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

let posts = [];

app.get("/", function (req, res) {
  res.render("home", {
    posts: posts,
  });
});

app.get("/posts/:postID", function (req, res) {
  const value = _.lowerCase(req.params.postID);

  posts.forEach(function (post) {
    const title = _.lowerCase(post.title);

    if (value === title) {
      res.render("post", {
        title: post.title,
        content: post.content,
      });
    }
  });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = {
    title: req.body.blogTitle,
    content: req.body.blogBody,
  };

  posts.push(post);

  res.redirect("/");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
