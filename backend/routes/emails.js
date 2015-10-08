var express = require('express');
var router = express.Router();
var Email = require('../models/email');


/* GET home page. */
router.get('/', function(req, res, next){
  Email.find(function(err, emails){
    res.send(emails);
  });
});

router.post('/', function(req, res){
  var email = new Email(req.body);
  email.save(function(err, savedEmail){
    res.send();
  });
});

router.delete('/', function(req, res){
  Email.find(req.body).remove(function(err, emails){
    res.send(emails);
  });
});

module.exports = router;
