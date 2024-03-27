const express = require('express');
const app = express()
const port = 3000

const connection = require("./database/database");
const People = require("./database/people")

app.set('view engine','ejs');
app.use(express.static('public'));

connection
    .authenticate()
    .then(() => {
        console.log("connection to database ok!!!")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.get('/', (req,res) => {

    countPeoples()
        .then((count) => {
            if(count === 0) {
                People.create({
                    name: generateRandomName()
                });
                res.render("index",{
                    peoples: 0
                });
            } else {
                People.create({
                    name: generateRandomName()
                });
                People.findAll({ raw: true }).then(peoples => {
                    res.render("index",{
                        peoples: peoples
                    });
                });
            }
        });
});

app.listen(port, () => {
    console.log('node serve up!!!')
})

async function countPeoples() {
    const count = await People.count()
    return count
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
