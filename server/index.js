import express from "express";
const app = express()
// const SERVER_PORT = 3000
const SERVER_PORT = 8888
// const SERVER_PORT = process.env.SERVER_PORT

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle!!!!</h1>')
});

app.listen(SERVER_PORT, () => {
    console.log(`Rodando na porta ${SERVER_PORT}`);
});