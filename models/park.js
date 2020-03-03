const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = new mongoose.Schema({
    //image
    name: String,
    location: String,
    comment: {
        type: String
    },
    favorite: false

}, {
    timestamps: true
});

module.exports = mongoose.model('Park', parkSchema);
