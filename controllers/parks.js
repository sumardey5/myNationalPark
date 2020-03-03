const User = require('../models/park');

module.exports = {
    index
}

function index(req, res) {
    Park.find({}, function(err, parks) {
        if (err) {
            console.log(err);
        } else {
        res.render('parks/index', {parks, user: req.user});
        }
    });
}