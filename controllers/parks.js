const Tktk = require("../models/park");

module.exports = {
  index
};

function index(req, res) {
  Tktk.find({}, function(err, parks) {
    if (err) return next(err);
    res.render("parks/index", { parks });
  });
}
