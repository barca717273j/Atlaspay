const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rota inicial
app.get("/", (req, res) => {
  res.json({
    status: "online",
    gateway: "AtlasPay",
    message: "Gateway funcionando 🚀"
  });
});

// Criar pagamento (simulado)
app.post("/create-payment", (req, res) => {
  const { amount, description } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Valor é obrigatório" });
  }

  const payment = {
    id: "ATLAS_" + Date.now(),
    amount,
    description,
    status: "PENDING",
    pix_code: "00020126360014BR.GOV.BCB.PIX0114+5585999999995204000053039865802BR5920ATLASPAY6009FORTALEZA62070503***"
  };

  res.json(payment);
});

app.listen(PORT, () => {
  console.log("AtlasPay rodando na porta", PORT);
});
