const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rota principal
app.get("/", (req, res) => {
  res.send("AtlasPay online 🚀");
});

// Rota de pagamento PIX (simulada)
app.post("/pix", (req, res) => {
  const { valor, descricao } = req.body;

  if (!valor) {
    return res.status(400).json({
      status: "erro",
      message: "Valor não informado"
    });
  }

  res.json({
    status: "sucesso",
    gateway: "AtlasPay",
    metodo: "PIX",
    valor,
    descricao: descricao || "Pagamento AtlasPay",
    txid: "ATLASPAY123456",
    pix_copia_e_cola: "00020101021226890014br.gov.bcb.pix0136atlaspay@pix.com5204000053039865802BR5920ATLASPAY GATEWAY6009SAO PAULO62070503***6304ABCD"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
