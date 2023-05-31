const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comment.controller');

router.get('/:post_id', commentsController.getAllByPostId);
router.post('/:post_id/create', commentsController.createComment);

module.exports = router;