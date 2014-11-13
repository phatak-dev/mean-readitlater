var express    = require('express'); 
var bodyParser = require('body-parser');
var app = express()

app.use(express.static(__dirname + '/frontend'));

var port = process.env.PORT || 8081;
app.listen(port)
console.log('access page at ' + port);