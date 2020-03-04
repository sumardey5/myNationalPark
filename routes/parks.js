const express = require('express');
const router = express.Router();
const parksCtrl = require('../controllers/parks');

router.get('/', parksCtrl.index);
router.get('/parks', parksCtrl.onePark);
router.get('/comments', parksCtrl.showComment);

module.exports = router;
