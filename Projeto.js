const express = require ('express');
const path = require('path');

const app = express();
const PORT = 5800;

app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/imc', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'imc.html'));
});

app.get('/notas', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'notas.html'));
});

app.get('/dolar', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'dolar.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor esta rodando em http://localhost:${PORT}`);
});