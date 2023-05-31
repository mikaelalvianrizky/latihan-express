// https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
// https://www.youtube.com/watch?v=tpso18ghda4
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        operatorsAliases: false
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Post = require('./posts.models')(sequelize, DataTypes);
db.Comment = require('./comment.models')(sequelize, DataTypes);
db.Prediction = require('./prediction.models')(sequelize, DataTypes);
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database has been synchronized.');
    }).catch((error) => {
        console.error('Unable to synchronize the database: ', error);
    }
)

module.exports = db;