
var MongoClient = require('mongodb').MongoClient;
module.exports = {
 start : startFn 
};

/**
  Connects to the db and calls the callback if it's successfully connected
*/
function startFn(cb) {
  MongoClient.connect("mongodb://localhost:27017/test", 
  	function(err, db) {
    if(err)console.log(err);  		
    else {
    module.exports.db = db;  
    cb.call(this,[]); }
  })}


