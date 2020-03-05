var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportsSchema = new mongoose.Schema({
  parkActivity: {
    type: String
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Sport', sportsSchema);