const express = require('express');
const router = express.Router();
const parksCtrl = require('../controllers/parks');

router.get('/', parksCtrl.index);
router.get('/individual', parksCtrl.onePark);
router.get('/new', parksCtrl.showComment);

module.exports = router;
