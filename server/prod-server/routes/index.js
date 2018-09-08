var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('111');
});
router.get('/lrc', function(req, res, next) {
  //console.log(req.query)
  var lrc = req.query.music;
  var data = fs.readFileSync('../lrc/'+ lrc +'.lrc');
  res.send(data.toString())
});
router.get('/shop', function(req, res, next) {
	console.log(req.query)
  res.send(JSON.stringify([{name:'shop',price:'22'},{name:'book',price:'32'}]))
});
router.get('/fruit', function(req, res, next) {
  res.send(JSON.stringify([{name:'fruit',color:'red'}]))
});
router.get('/one', function(req, res, next) {
	//res.type('html');
  res.render('one.html',{})
});

module.exports = router;
