var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var profile = require('../models/profile');

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    profile.findOne({ 'googleId': profile.id }, function(err, profile) {
      if (err) return cb(err);
      if (profile) {
        if (!profile.avatar) {
          profile.avatar = profile.photos[0].value;
          profile.save(function(err) {
            return cb(null, profile);
          });
        } else {
          return cb(null, profile);
        }
      } else {
        // we have a new profile via OAuth!
        var newprofile = new profile({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newprofile.save(function(err) {
          if (err) return cb(err);
          return cb(null, newprofile);
        });
      }
    });
  }
));

passport.serializeUser(function(profile, done) {
  done(null, profile.id);
});

passport.deserializeUser(function(id, done) {
  profile.findById(id, function(err, profile) {
    done(err, profile);
  });
});
