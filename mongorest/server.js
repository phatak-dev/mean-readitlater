var express    = require('express'); 
var app        = express(); 
var bodyParser = require('body-parser');
var cors = require('cors');

//add cors to do the cross site requests
app.use(cors());

var db,Urls;

//make a request to access database
var database = require('./database')
database.start(function(){
   db = database.db;
   //point to urls
   Urls = db.collection("urls");
});


var port = process.env.PORT || 8080;

//router for api
var router = express.Router(); 

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

//get all the urls stored in db
router.get('/urls',function(req,res) {
  var query = Urls.find({});	
  //query only fires when you call toArray
  query.toArray(function(err,records) {
    res.json(records);
  }) 
});

// add a specific url to the database
router.post('/addurl/:url',function(req,res) {  
  //express automatically injects the url parameter when it sees :url 
  var url = req.params.url;
  Urls.insert({'url':url},function(err,records){
  	if(!err)res.json({ message: 'successfully added' });	
  });
});


//mount the router on /api
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

//another route for static file
require('./static-content.js');

