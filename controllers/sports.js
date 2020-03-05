const Sport = require('../models/sport');
module.exports = {
  index,
};

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
