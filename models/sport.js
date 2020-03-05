var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var sportsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
    difficulty: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Sport', sportsSchema);