var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var sqlite3 =require('sqlite3').verbose();
var db = new sqlite3.Database('chessclub');
const http = require("http");
const fs = require('fs').promises;

// Tell our application to serve all the files under the `public_html` directory
app.use(express.static('public'))

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({extended: true}));
// To parse the incoming requests with JSON payloads
app.use(express.json()) 
// To load the images stored in the images folder.
app.use('/images', express.static(__dirname +'/images'));
// prase data
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

//1st access endpoint
app.get('/', function(req, res) {
    fs.readFile(__dirname + "/RelaxEatery.html")
          .then(contents => {
              res.setHeader("Content-Type", "text/html");
              res.writeHead(200);
              res.end(contents);
          })
  });

//reservation endpoint
app.get('/Reservation', function(req, res) {
    fs.readFile(__dirname + "/Reservation.html")
          .then(contents => {
              res.setHeader("Content-Type", "text/html");
              res.writeHead(200);
              res.end(contents);
          })
  });

  //reservation endpoint
app.get('/Home', function(req, res) {
    fs.readFile(__dirname + "/RelaxEatery.html")
          .then(contents => {
              res.setHeader("Content-Type", "text/html");
              res.writeHead(200);
              res.end(contents);
          })
  });

//reservation endpoint
app.get('/Aboutus', function(req, res) {
    fs.readFile(__dirname + "/Aboutus.html")
          .then(contents => {
              res.setHeader("Content-Type", "text/html");
              res.writeHead(200);
              res.end(contents);
          })
  });

//reservation endpoint
app.get('/Menu', function(req, res) {
    fs.readFile(__dirname + "/Menu.html")
          .then(contents => {
              res.setHeader("Content-Type", "text/html");
              res.writeHead(200);
              res.end(contents);
          })
  });

//reservation endpoint
app.get('/Blog', function(req, res) {
    fs.readFile(__dirname + "/Blog.html")
          .then(contents => {
              res.setHeader("Content-Type", "text/html");
              res.writeHead(200);
              res.end(contents);
          })
  });

//reservation endpoint
app.get('/Location&Hours', function(req, res) {
    fs.readFile(__dirname + "/Location&Hours.html")
          .then(contents => {
              res.setHeader("Content-Type", "text/html");
              res.writeHead(200);
              res.end(contents);
          })
  });

// insert reservation data
// app.post('/reservation', function (req, res, next) {
//     var stmt = db.run(`INSERT INTO reservation VALUES ("${req.body.name}", "${req.body.email}", "${req.body.phone}", "${req.body.date}", "${req.body.time}", "${req.body.guest}", "${req.body.comment}")`);
//     res.status(200).redirect('/');  
// });

// Tell our application to listen to requests at port 3000 on the localhost
app.listen(process.env.PORT || 8080, function () {
    // When the application starts, print to the console that our app is
    // running at http://localhost:8080 (where the port number is 3000 by
    // default). Print another message indicating how to shut the server down.
    console.log(`App listening on port`);
    console.log("Type Ctrl+C to shut down the web server");
});