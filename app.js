//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// const homeStartingContent = ";
// const aboutContent = ;
// const contactContent = ;

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res)=>{
  res.render('home', {route: 'homepage'});
});

app.get('/about', (req, res)=>{
  res.render('about', {route: 'about'});
});

app.get('/contact', (req, res)=>{
  res.render('contact', {route: 'contact'});
});














app.listen(3000, function() {
  console.log("Server started on port 3000");
});
