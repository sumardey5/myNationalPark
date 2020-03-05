var mongoose = require('mongoose');
var sportsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
    difficulty: String
}, {
  timestamps: true
});
module.exports = mongoose.model('Sport', sportsSchema);