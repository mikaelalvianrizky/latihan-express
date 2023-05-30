// https://www.youtube.com/watch?v=oK5AfB7qX-s
const express = require('express');
const Sequelize = require("sequelize");
const app = express();

require('dotenv').config();

const postsRouter = require('./routes/posts.router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/posts', postsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});