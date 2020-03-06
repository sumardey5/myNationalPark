const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/parks/:id/comments', commentsCtrl.create);
router.put('/:id', commentsCtrl.update); //update

module.exports = router;
