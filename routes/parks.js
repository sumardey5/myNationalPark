const express = require('express');
const router = express.Router();
const parksCtrl = require('../controllers/parks');

router.get('/parks/index', parksCtrl.index);

module.exports = router;
