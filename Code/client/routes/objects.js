const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName= 'objectCollection';

function objects(res){
    
    MongoClient.connect(url,{ useNewUrlParser: true },function(err,client) {
    if (err) {
            console.log("Unable to connect to DB.", err);
                client.close();
        } else {
            console.log("Connection established.");
            const db=client.db(dbName);
            const collection='objectCollection';
            var clr=db.collection(collection);
            var random=(Math.floor(Math.random() * 5) + 1);
            clr.findOne({_id:random},function(err, result) {
                console.log('in mongo')
                console.log(result);
                res.json(result);
                client.close();
            }); 
        };
    });
};



module.exports= { objects };