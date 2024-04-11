// PersonalUser model
const mongoose = require('mongoose');
const personalUserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
  
  const PersonalUser = mongoose.model('PersonalUser', personalUserSchema);

  module.exports = PersonalUser;