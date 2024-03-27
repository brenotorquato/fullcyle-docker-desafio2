const Sequelize = require('sequelize');

const connection = new Sequelize('nodedb','root','root', {
    host: 'database',
    dialect: 'mysql'
});

module.exports = connection;