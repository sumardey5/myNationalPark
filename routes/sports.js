const express = require('express');
const router = express.Router();
const sportsCtrl = require('../controllers/sports');

router.get('/new', sportsCtrl.index);

module.exports = router;