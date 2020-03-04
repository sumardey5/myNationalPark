const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true
});

const parkSchema = new mongoose.Schema({
    //image
    name: String,
    location: String,
    favorite: false,
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Park', parkSchema);
