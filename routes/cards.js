var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Cards');

router.get('/', function(req, res) {
	var collection = db.get('blueCards');
	collection.find({}, function(err, blueCards) {
		if (err) throw err;
		res.json(blueCards);
	});
});

module.exports = router;