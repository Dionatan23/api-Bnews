const express = require("express");

const app = express()
// Metodo HTTP GET = DE PEGAR ALGUMA COISA, NO CASO PEGAR A RESPOSTA PRO USER 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running on porta 3000')
})