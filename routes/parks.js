const express = require("express");
const router = express.Router();
const parksCtrl = require("../controllers/parks");

router.get("/", parksCtrl.index);

module.exports = router;
