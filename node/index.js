const express = require('express');
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle - Breno teste</h1>')
})

app.listen(port, () => {

    console.log('STEP 1 - Rodando na porta ' + port)

    createTableDatabase()
    console.log('STEP 2 - Verificado se tabela people foi criada')

    // insertNameDatabase(generateRandomName())
    // console.log('STEP 3 - executada tentativa de insert de nome')
    var list = listAllPeople()
    console.log("### LISTA DE PESSOAS")
    console.log('STEP 4 - carregada lista de nomes')

})

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
            console.log(result)
            return result
        })
    })
}

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