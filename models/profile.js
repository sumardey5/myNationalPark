const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  cohort: String,
  avatar: String,
  googleId: String
  //favorite
  //travel list
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);