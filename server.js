var express = require('express');
 var app = express();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "startup"
});


app.get("/startup", function (req, res) {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Startup", function (err, result, fields) {
          if (err) throw err;
          res.send(result);
        });
      });
});
app.get("/user.html", function (req, res) {
  res.sendFile(__dirname + '/user.html')
});
app.get("/CSS/main.css", function(req, res){
  res.sendFile(__dirname + '/CSS/main.css')
});
app.get("/JS/jquery.min.js", function(req, res){
  res.sendFile(__dirname + '/JS/jquery.min.js')
});
app.get("/JS/popper.min.js", function(req, res){
  res.sendFile(__dirname + '/JS/popper.min.js')
});
app.get("/JS/bootstrap.min.js", function(req, res){
  res.sendFile(__dirname + '/JS/bootstrap.min.js')
});
app.get("/main.html", function (req, res) {
  res.sendFile(__dirname + '/main.html')
});
app.get("/investmanager.html", function (req, res) {
  res.sendFile(__dirname + '/investmanager.html')
});
app.get("/startupdirector.html", function (req, res) {
  res.sendFile(__dirname + '/startupdirector.html')
});
app.get("/CSS/startupdirector.css", function (req, res) {
  res.sendFile(__dirname + '/CSS/startupdirector.css')
});
app.get("/CSS/bootstrap.min.css", function (req, res) {
  res.sendFile(__dirname + '/CSS/bootstrap.min.css')
});
app.get("/JS/script-user.js", function (req, res) {
  res.sendFile(__dirname + '/JS/script-user.js')
});

app.listen(3000);