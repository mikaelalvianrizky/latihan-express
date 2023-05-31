const axios = require('axios');
const db = require('../models');

const Prediction = db.Prediction;

const nlpController = {
    createPrediction: async (req, res) => {
        const result = await axios({
            url: 'http://127.0.0.1:5000/nlp',
            method: 'post',
            data: {
                text: req.body.text
            },
            header: {
                'Content-Type': 'application/json'
            }
        });
        const data = result.data
        const prediction = await Prediction.create({
            curhat: req.body.text,
            prediksi: data
        });
        res.status(200).json({
            "message": "successfully makes prediction",
            "data": prediction
        });
    }
};

module.exports = nlpController;
