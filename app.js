const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("home");
});

app.get("/compose", function(req, res){
    res.render("compose");
});

app.post("/compose", function(req, res) {
    console.log(req.body.blogTitle);
    console.log(req.body.blogBody)
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {
    console.log("server started at port 3000");
})