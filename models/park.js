const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    timestamps: true
})

const parkSchema = new mongoose.Schema({
    name: {type: String, required: true},
    year: {type: Number},
    location: String,
    favorite: {type: Boolean, default: false},
    comments: [commentSchema],
    userWhoCreated: {type: Schema.Types.ObjectId, ref: 'User'},
    parkActivity: [{type: Schema.Types.ObjectId, ref: 'Sport'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Park', parkSchema);
