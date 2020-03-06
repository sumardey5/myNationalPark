const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/parks/:id/comments', commentsCtrl.create);

router.get('/parks/:parkid/:commentid/edit', commentsCtrl.edit);
// router.get('/parks/:id', commentsCtrl.edit); //
router.put('/:id', commentsCtrl.update); //update

module.exports = router;
