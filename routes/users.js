const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
// router.get('/favorites', usersCtrl.showFav);
// router.get('/trips', usersCtrl.showList);

module.exports = router;