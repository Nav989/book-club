const { Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('bookclub', 'root', '', {

    host: 'localhost',
    dialect: 'mysql',
    logging: true,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

});

sequelize.authenticate()
    .then(() => {
        console.log("connected");
    }).catch(err => {
        console.log("error" + err);
    })


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({
        force: false
    })
    .then(() => [
        console.log("yes sync")
    ]).catch(err => {
        console.log("error" + err)
    })

db.User = require('../models/RegisterSchema')(sequelize, DataTypes);


module.exports = db;