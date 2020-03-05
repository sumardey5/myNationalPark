const Park = require('../models/park'); //defining the models

module.exports = {
    index,
    onePark,
    showComment,
    new: newPark
};

function newPark(req, res) {
    res.render('parks/new', { title: 'Add Park' });
}

function showComment(req, res) {
    Park.find({}, function(err, parks) {
        if (err) {
            console.log(err);
        } else {
        res.render('parks/new', {parks, user: req.user});
        }
    });
}

function onePark(req, res) {
    Park.find({}, function(err, parks) {
        if (err) {
            console.log(err);
        } else {
        res.render('parks/individual', {parks, user: req.user});
        }
    });
}

function index(req, res) {
    Park.find({}, function(err, parks) {
        if (err) {
            console.log(err);
        } else {
        //this function looks into the views folder for the ejs template I want to send back to the browser, and I put into it the name of the file or if there are folders inside the view, then I put the name of the folder then the file name.
        res.render('parks/index', {parks, user: req.user});
        }
    });
}
