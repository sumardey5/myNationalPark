const Park = require('../models/park'); //defining the models
const Sport = require('../models/sport');

module.exports = {
    index,
    onePark,
    showComment,
    new: newPark,
    show,
    create
};
//New
function create(req, res) {
    req.body.favorite = !!req.body.favorite;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const park = new Park (req.body);
    park.save(function(err) {
        if (err) return res.redirect('/parks/new');
        res.redirect(`/parks/${park._id}`);
    });
}

function show(req, res) {
    Park.findById(req.params.id)
    .populate('parkActivity').exec(function(err, park) {
        Sport.find({_id: {$nin: park.parkActivity}}, function(err, sports) {
            res.render('parks/individual', {
                 park, sports
            });
        });
    });
}

function newPark(req, res) {
    res.render('parks/new', { title: 'Add Park' });
}

//Old news
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

