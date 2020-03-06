const express = require('express');
const router = express.Router();
const parksCtrl = require('../controllers/parks');

router.get('/', parksCtrl.index);
// router.get('/individual', parksCtrl.onePark);
// router.get('/new', parksCtrl.showComment);

//New 
router.get('/new', parksCtrl.new);
router.get('/:id', parksCtrl.show);
router.post('/', parksCtrl.create);

router.delete('/:id', parksCtrl.delete); //delete
router.put('/:id', parksCtrl.update); //update

module.exports = router;
