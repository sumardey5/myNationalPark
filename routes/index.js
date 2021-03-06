const express = require('express');
const router = require('express').Router();
const passport = require('passport');

module.exports = router;

// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index');
  // '/' = redirect
});

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/parks',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
