const axios = require('axios');

const nlpController = {
    createPrediction: async (req, res) => {
        const result = await axios.post('http://127.0.0.1:5000/nlp', {
            text: req.body.text
        });
        res.status(200).json({
            "message": "successfully makes prediction",
            "data": result.data
        });
    }
};

module.exports = nlpController;
