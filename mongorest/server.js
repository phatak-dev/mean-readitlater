var express    = require('express'); 
var app        = express(); 
var bodyParser = require('body-parser');
var cors = require('cors');
var ObjectID = require('mongodb').ObjectID

app.use(cors());

// to support JSON-encoded bodies
app.use( bodyParser.json() );       

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
  query.toArray(function(err,questions) {
    res.json(questions);
  }) 
});

router.post('/addurl/:url',function(req,res) {  
  var url = req.params.url;
  var jsonObject = {'url':url,'read':false};
  Urls.insert(jsonObject,function(err,records){
  	if(!err)res.json({ message: 'successfully added' });	
  });
});

//update api 
router.post('/update',function(req,res){
  var json = req.body;
  var id = json._id;
  json._id = ObjectID(id);    
  Urls.update({_id:ObjectID(id)},json, 
  	 function(err,records){
  	if(!err)console.log({ message: 'successfully updated' })
    else console.log(err);	
  });
});


app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

//another route for static file
require('./static-content.js');

