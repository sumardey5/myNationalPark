const Park = require('../models/park');

module.exports = {
    create,
    update,
    edit
};

function edit (req, res) {
    Park.findById(req. params.id, function (err, park) {
        if (!park.user.equals(req.user._id)) return res.redirect('/parks');
        res.render('parks', {park});
    })
}

function update (req, res) {
    Park.findByIdAndUpdate(req.params.id, req.body, function(err, park) {
        res.redirect('/comments');
    });
}

function create(req, res) {
    Park.findById(req.params.id, function(err, park) {
        park.comments.push(req.body);
        park.save(function(err) {
            res.redirect(`/parks/${park._id}`);
        });
    });
}