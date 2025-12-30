const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Configurações
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`AtlasPay rodando em http://localhost:${PORT}`));
