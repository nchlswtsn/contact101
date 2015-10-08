'use strict';

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var emailSchema = Schema({
  Email: {type: String, required: true},
  Subject: {type: String, required: true, default: "This email subject is a test!"}
  Content: {type: String, required: true, default: "This email content is a test!"}
});


var Email = Mongoose.model('Email', emailSchema);

module.exports = Email;
