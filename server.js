var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.post('/login', function(req, res, next) {
    
     res.send.json({"message":"Success da Harish"});
    // var password = req.body.password;
    // if((username == "saiharish96" && password == "kavyasri") || (username == "kavyasri" && password == "saiharish96")){
    //     res.status(200).send("YOU BOTH MAKE A NICE COUPLE");
    // }
    // else{
    //     res.status(500).send("FAILURE INVALID CREDENTIALS");
    // }
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
