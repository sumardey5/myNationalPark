// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// var Profile = require('../models/profile');

// // configuring Passport!
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
//     callbackURL: process.env.GOOGLE_CALLBACK
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     // a user has logged in via OAuth!
//     Profile.findOne({ 'googleId': profile.id }, function(err, profile) {
//       if (err) return cb(err);
//       if (profile) {
//         if (!profile.avatar) {
//           profile.avatar = profile.photos[0].value;
//           profile.save(function(err) {
//             return cb(null, profile);
//           });
//         } else {
//           return cb(null, profile);
//         }
//       } else {
//         // we have a new profile via OAuth!
//         var newprofile = new Profile({
//           name: profile.displayName,
//           email: profile.emails[0].value,
//           googleId: profile.id
//         });
//         newprofile.save(function(err) {
//           if (err) return cb(err);
//           return cb(null, newprofile);
//         });
//       }
//     });
//   }
// ));

// passport.serializeUser(function(profile, done) {
//   done(null, profile.id);
// });

// passport.deserializeUser(function(id, done) {
//   Profile.findById(id, function(err, profile) {
//     done(err, profile);
//   });
// });

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ 'googleId': profile.id }, function(err, user) {
      if (err) return cb(err);
      if (user) {
        return cb(null, user);
      } else {
        var newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newUser.save(function(err) {
          if (err) return cb(err);
          return cb(null, newUser);
        });
      }
    });
  }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  