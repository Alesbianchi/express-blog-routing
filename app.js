const express = require('express');
const app = express()
const port = 3000

//definisco la cartella per i file statici
app.use(express.static('pubblic'));


//definisco la rotta home
app.get('/', (req, res) => {
    res.send("Server del mio blog");
})

//avvio del server sulla porta indicata
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
    
})
