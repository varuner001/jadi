var express = require('express');
var router = express.Router();
var users = require('../pages/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  users.GET(req,res,next);
});
module.exports = router;
