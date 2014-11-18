var express    = require('express'); 
var app        = express(); 
var bodyParser = require('body-parser');

var db,Urls;

var database = require('./database')
database.start(function(){
   db = database.db;
   Urls = db.collection("urls");
});

var port = process.env.PORT || 8080;
var router = express.Router(); 

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

router.get('/urls',function(req,res) {
  var query = Urls.find({})	
  query.toArray(function(err,records) {
    res.json(records);
  }) 
});

router.post('/addurl/:url',function(req,res) {  
  var url = req.params.url;
  Urls.insert({'url':url},function(err,records){
  	if(!err)res.json({ message: 'successfully added' });	
  });
});


app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
