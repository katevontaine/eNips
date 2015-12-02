var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + "/app"))

app.get('/', function(req,response) {
  response.sendFile('app');
});

app.get('/work', function(req,res) {
  res.send("<p>is dis working</p>");
});


http.listen(port);


console.log('WE ARE RUNNING ON PORT:' + port);
