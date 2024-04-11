// BusinessUser model
const mongoose = require('mongoose');
const businessUserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
  
  const BusinessUser = mongoose.model('BusinessUser', businessUserSchema);
  
  module.exports = BusinessUser;