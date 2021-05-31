const Sequelize = require('sequelize')

const userModel = require('../models/userModel')
const eventModel = require('../models/eventModel')

//1. open connection sequelize
const sequelize = new Sequelize('ddbdu0ta5ij1j', 'rrmedrumykcmer', '6114e292fcb6875cf5b018946be1b8dcb5c6430261d49ccaf81a91e9be09047e', {
    host: 'ec2-52-0-114-209.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  }
});


//2. test connection sequelize
sequelize.authenticate()
    .then((result) => console.log('Connection to the database has been established succesfully.', result))
    .catch((error) => console.error('Unable to connect to the database:', error))

//3. export model
module.exports = {
    eventModel: eventModel(sequelize, Sequelize.DataTypes),
    userModel: userModel(sequelize, Sequelize.DataTypes)
}