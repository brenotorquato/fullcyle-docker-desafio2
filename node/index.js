const express = require('express');
const app = express()
const port = 3000

const connection = require("./database/database");
const Pessoa = require("./database/pessoa")

connection
    .authenticate()
    .then(() => {
        console.log("#### CONEXAO COM BANDO DE DADOS OK ####")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {

    /*
    Pessoa.create({
        name: generateRandomName()
    });
    */

    Pessoa.findAll({ raw: true }).then(pessoas => {
        res.render("index",{
            pessoas: pessoas
        });
    });
    
});

/*
app.get('/', (req,res) => {

    res.send('<h1>Full Cycle - Breno teste</h1>')

    var con = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    });

    con.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados: ', err);
            return;
        }
        console.log('Conectado ao banco de dados.');
    });

    con.query('SELECT * FROM people', (error, results) => {
        if (error) {
            console.error('Erro ao executar a consulta: ', error);
            return;
        }

        let bodyHtml = '<h1>Full Cycle</h1><br/><br/><br/>';
        bodyHtml += '<table><tr><th>ID</th><th>Nome</th></tr>';
        results.forEach((row) => {
            bodyHtml += `<tr><td>${row.id}</td><td>${row.name}</td></tr>`;
        });
        bodyHtml += '</table>';
        res.send(bodyHtml);
        // return bodyHtml;
    });

})
*/

app.listen(port, () => {
    console.log('STEP 1 - Rodando na porta ' + port)
    // createTableDatabase()
})

/*
function listNames() {
    var con = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    });

    con.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados: ', err);
            return;
        }
        console.log('Conectado ao banco de dados.');
    });

    con.query('SELECT * FROM people', (error, results) => {
        if (error) {
            console.error('Erro ao executar a consulta: ', error);
            return;
        }

        let bodyHtml = '<h1>Full Cycle</h1><br/><br/><br/>';
        bodyHtml += '<table><tr><th>ID</th><th>Nome</th></tr>';
        results.forEach((row) => {
            bodyHtml += `<tr><td>${row.id}</td><td>${row.nome}</td></tr>`;
        });
        bodyHtml += '</table>';
        // res.send(bodyHtml);
        return bodyHtml;
    });
}

// database functions
const mysql = require('mysql');

function createTableDatabase() {
    const sql = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`
    executeSQLDatabase(sql)
}

function insertNameDatabase(name) {
    const sql = `INSERT INTO people(name) values('${name}')`
    const result = executeSQLDatabase(sql)
}

function listAllPeople() {
    const sql = `SELECT * FROM people`
    return executeSQLDatabase(sql)
}

function executeSQLDatabase(sql)  {
    var con = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    })
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function(err, result, fields) {
            if (err) {
                console.log("### ERRO ENCONTRADO AO EXECUTAR SQL: " + err.code)
                console.log("### STACK TRACE: " + err)
            }
            return result
        })
    })
}
*/

// support functions
function generateRandomName() {
    var nameList = [
        'João','Patricia','José','Maria',
        'Fernando','Ana','Joaquim','Soraya','Pedro','Bruno',
        'Fátima','Angelo','Clara','Marcio','Gisele','Renato','Barbara',
        'Teodoro','Maria','Gomes','Leonora','Daniela','Carlos','Mariana',
        'Gustavo','Wanessa','Zacarias','Renata','Tadeu'
    ];
    return nameList[Math.floor(Math.random() * nameList.length)];
}
