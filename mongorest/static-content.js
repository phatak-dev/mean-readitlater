var express    = require('express'); 
var bodyParser = require('body-parser');
var app = express()

//we use express static content middle ware  to serve the static content
app.use(express.static(__dirname + '/angularcode'));

var port = process.env.PORT || 8081;
app.listen(port)
console.log('access page at ' + port);