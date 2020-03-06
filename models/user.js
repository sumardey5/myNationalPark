
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema ({
    name: String,
    avatar: String,
    park: [{
        type: Schema.Types.ObjectId,
        ref: 'Park'
    }],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);