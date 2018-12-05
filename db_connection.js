var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "startup"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM InvestmentManager", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});