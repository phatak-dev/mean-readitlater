
var MongoClient = require('mongodb').MongoClient;
module.exports = {
 start : startFn 
}

function startFn(cb) {
  MongoClient.connect("mongodb://localhost:27017/test", 
  	function(err, db) {
    if(err)console.log(err);  		
    module.exports.db = db;  
    cb.call(this,[]);
  })}


