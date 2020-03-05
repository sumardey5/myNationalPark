const Sport = require('../models/sport');
const Park = require('../models/park');

module.exports = {
  index,
  new: newSport,
  create,
  addToActivities
};
//New
function addToActivities(req, res) {
  Park.findById(req.params.id, function(err, park) {
    park.activities.push(req.body.sportId);
    park.save(function(err) {
      res.redirect(`/parks/${park._id}`);
    });
  });
}

function create(req, res) {
  console.log(req.body)
  Sport.create(req.body, function(err, sport) {
    console.log(err)
    console.log(sport)
    res.redirect('/sports/new');
  });
}

function newSport(req, res) {
  Sport.find({}, function(err, sports) {
    res.render('sports/new', {
      name: 'Add Activity',
      sports
    });
  });
}

//Old
function index(req, res) {
  Sport.find({}, function(err, sports) {
      if (err) {
          console.log(err);
      } else {
      //this function looks into the views folder for the ejs template I want to send back to the browser, and I put into it the name of the file or if there are folders inside the view, then I put the name of the folder then the file name.
      res.render('sports/new', {sports, user: req.user});
      }
  });
}
