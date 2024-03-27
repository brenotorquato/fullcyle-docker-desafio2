const Sequelize = require("sequelize");
const connection = require("./database");

const People = connection.define('people',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

People.sync({force: false}).then(() => {});

module.exports = People;