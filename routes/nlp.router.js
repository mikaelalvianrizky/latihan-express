const express = require('express');
const router = express.Router();

const nlpController = require('../controllers/nlp.controller');

router.post('/', nlpController.createPrediction);

module.exports = router;