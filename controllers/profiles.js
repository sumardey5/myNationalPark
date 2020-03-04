const Profile = require('../models/profile');

module.exports = {
    index,
    showFav,
    showList
}

function index (req, res, next){
    Profile.find({}, function(err, profiles) {
        if (err) {
            console.log(err);
        } else {
        res.render('profiles/index', {profiles, user: req.user});
        }
    });
}

function showFav (req, res, next){
    Profile.find({}, function(err, profiles) {
        if (err) {
            console.log(err);
        } else {
        res.render('profiles/favorites', {profiles, user: req.user});
        }
    });
}

function showList (req, res, next){
    Profile.find({}, function(err, profiles) {
        if (err) {
            console.log(err);
        } else {
        res.render('profiles/trips', {profiles, user: req.user});
        }
    });
}