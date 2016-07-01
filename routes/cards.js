var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Cards');

router.get('/blueCards', function(req, res) {
	var collection = db.get('blueCards');
	collection.find({}, function(err, blueCards) {
		if (err) throw err;
		res.json(blueCards);
	});
});

router.get('/greenCards', function(req, res) {
	var collection = db.get('greenCards');
	collection.find({}, function(err, greenCards) {
		if(err) throw err;
		res.json(greenCards);
	});
});

router.post('/blueCards', function(req, res) {
	var collection = db.get('blueCards');
	collection.insert({
		cardName: req.body.cardName,
		health: req.body.health,
		attack: req.body.attack,
		description: req.body.description
	}, function(err, blueCards) {
		if (err) throw err;

		res.json(blueCards);
	});
});

router.post('/greenCards', function(req, res) {
	var collection = db.get('greenCards');
	collection.insert({
		cardName: req.body.cardName,
		cardEffect: req.body.cardEffect
	}, function(err, greenCards) {
		if (err) throw err;

		res.json(greenCards);
	});
});

router.get('/blueCards/:id', function(req, res) {
	var collection = db.get('blueCards');
	collection.findOne({ _id: req.params.id}, function(err, blueCards) {
		if (err) throw err;

		res.json(blueCards);
	});
});

router.put('/blueCards/:id', function(req, res) {
	var collection = db.get('blueCards');
	collection.update({
		_id: req.params.id
	},
	{
		cardName: req.body.cardName,
		health: req.body.health,
		attack: req.body.attack,
		description: req.body.description
	}, function(err, blueCards) {
		if (err) throw err;

		res.json(blueCards);
	});
})

router.delete('/blueCards/:id', function(req, res) {
	var collection = db.get('blueCards');
	collection.remove({ _id: req.params.id}, function(err, blueCards) {
		if (err) throw err;

		res.json(blueCards);
	})
})

module.exports = router;