const User = require('../models/user');
module.exports = {
  index,
  new: newPark
};

function newPark(req, res) {
  res.render('parks/parks');
}

function index(req, res) {
  User.find({}, function(err, users) {
      if (err) {
          console.log(err);
      } else {
      //this function looks into the views folder for the ejs template I want to send back to the browser, and I put into it the name of the file or if there are folders inside the view, then I put the name of the folder then the file name.
      res.render('users', {users, user: req.user});
      }
  });
}
