const Sequelize = require("sequelize");
const connection = require("./database");

const Pessoa = connection.define('pessoa',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Pessoa.sync({force: false}).then(() => {});

module.exports = Pessoa;