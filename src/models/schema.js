'use strict';

const mongoose = require('mongoose');


// Create a mongoose model
const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

//usersSchema.pre('save', function to handle bcrypt hash) - line 20 from routes.js - makes sure it runs the pre-hash before saving


// usersSchema.statics.basicAuthValidation(name, pw) 
//   get existing users
//   compare to bcrypt
//   if match; return users
//   otherwise return error


const Users = mongoose.model('users', usersSchema);

module.exports = Users;


// methods on schema - doing bcrypt, basicAuth => grab headers from request, decode with base 64, when getting decode it and 

// validation function will take info  from basicAuth and compare pw using bcrypt to match it to the 

// UsersSchema.statics.function()