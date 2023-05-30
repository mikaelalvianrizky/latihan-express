const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.controller');

router.get('/', postsController.getAll);
router.get('/:id', postsController.getById);
router.post('/create', postsController.create);
router.put('/update/:id', postsController.update);
router.delete('/delete/:id', postsController.delete);

module.exports = router;