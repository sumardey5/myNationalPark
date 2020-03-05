const express = require('express');
const router = express.Router();
const sportsCtrl = require('../controllers/sports');

router.get('/new', sportsCtrl.index);

//new
router.get('/sports/new', sportsCtrl.new);
router.post('/sports', sportsCtrl.create);

module.exports = router;