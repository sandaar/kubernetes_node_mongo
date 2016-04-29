#!/usr/local/bin/node

my_regex = "^"+process.argv[2].replace(/(_+)/g, ".+")+"$";
console.log(my_regex);

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://mongo:27017/task';
var findWords = function(db, callback) {
    var cursor = db.collection('words').find({"word": {$regex: my_regex, $options: "i"}});
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc.word);
        } else {
            callback();
        }
    });
};

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findWords(db, function() {
        db.close();
    });
});
