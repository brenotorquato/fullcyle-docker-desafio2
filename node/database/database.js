const Sequelize = require('sequelize');

const connection = new Sequelize('nodedb','root','root', {
    host: 'db',
    dialect: 'mysql'
});

module.exports = connection;