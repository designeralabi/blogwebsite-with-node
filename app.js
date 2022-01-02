const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const blogPost = [];

// homepage request
app.get('/', (req, res)=>{
  res.render('home', {route: 'homepage'});
});

// aboutpage request
app.get('/about', (req, res)=>{
  res.render('about', {route: 'about'});
});

// contact page request
app.get('/contact', (req, res)=>{
  res.render('contact', {route: 'contact'});
});

app.get('/post', (req, res)=>{
  res.render('post');

  const blogHeader = req.body.blogHeader;
  const contentText = req.body.contentText;

  // const newBlog =  blogHeader + contentText;

  console.log(blogHeader, contentText);
});


app.post('/', (req, res)=>{

  // res.render('post', {blogData: newBlog});
  res.send("Submitted Successfully");
});















app.listen(3000, function() {
  console.log("Server started on port 3000");
});
