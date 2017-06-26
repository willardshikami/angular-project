const express = require('express');
const path = require('path');
const http = require('http');
const router = express.Router();

const app = express();
app.use(express.static('client'));

//port
const port = 5000;

//homepage
app.get('/', (req, res) => {
    res.send('Invalid Entrypoint');
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
