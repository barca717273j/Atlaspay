const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AtlasPay está online');
});

app.post('/pagamento', (req, res) => {
  res.json({
    gateway: 'AtlasPay',
    status: 'sucesso',
    mensagem: 'Pagamento recebido (modo teste)'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('AtlasPay rodando na porta ' + PORT);
});
