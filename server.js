var express = require('express');
 var app = express();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "startup"
});

con.connect(function(err) {
        if (err) throw err;
        });
app.get("/startup", function (req, res) {
        con.query("SELECT * FROM Startup", function (err, result, fields) {
          if (err) throw err;
          res.send(result);        
      });
});
app.get("/application", function (req, res) {
        con.query("SELECT * FROM application where situation = 0 or situation is null;", function (err, result, fields) {
          if (err) throw err;
          res.send(result);        
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
app.get("/JS/script-investmanager.js", function (req, res) {
  res.sendFile(__dirname + '/JS/script-investmanager.js')
});
app.get("/JS/script-startupdirector.js", function (req, res) {
  res.sendFile(__dirname + '/JS/script-startupdirector.js')
});
app.get("/JS/script-founds.js", function (req, res) {
  res.sendFile(__dirname + '/JS/script-founds.js')
});
app.get("/founds.html", function (req, res) {
  res.sendFile(__dirname + '/founds.html')
});
app.get("/get_startup_by_id", function (req, res) {
console.log(req.query.id);
  con.query("SELECT * FROM Startup Where id = "+req.query.id+";", function (err, result, fields) {
          if (err) throw err;
          res.send(result[0]);
        });
});
app.get("/send-application", function (req, res) {

  con.query("SELECT id FROM Startup Where name like \""+req.query.name+"\";", function (err, result, fields) {
          if (err) throw err;
          var id = result[0].id;
          var sql = "insert into application(round, startup_id, investment) values (\"" +req.query.round+"\", \""+id+"\", \""+req.query.investment+"\");";
con.query(sql, function(err,result){
  if(err) throw err;
  console.log("data inserted");
})
      });

});
app.get("/access_application", function(req,res){
  if(req.query.is_invest_company==1){


    con.query("Update application set situation = 1, investment_company_id = "+req.query.investor_id+"  where startup_id = \""+req.query.id+"\";", function (err, result, fields){
      if(err) throw err;
      console.log("applied");
    });
 }else{
 con.query("Update application set situation = 1, investor_id = "+req.query.investor_id+" where startup_id = \""+req.query.id+"\";", function (err, result, fields){
      if(err) throw err;
      console.log("applied");
    });
}
});

app.get("/cancel_application", function(req,res){
    con.query("Update application set situation = 0 where startup_id = \""+req.query.id+"\";", function (err, result, fields){
      if(err) throw err;
      console.log("canceled");
    });

});
app.get("/get_founds", function(req,res){
    con.query(" select * from application where investment_company_id = \""+req.query.company_id+"\" ;", function (err, result, fields){
      if(err) throw err;
      res.send(result);
    });

});


app.listen(3000);