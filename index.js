const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Página inicial
app.get("/", (req, res) => {
  res.send(`
    <h2>AtlasPay - Teste</h2>
    <input id="amount" type="number" placeholder="Valor"><br><br>
    <input id="description" type="text" placeholder="Descrição"><br><br>
    <button onclick="pagar()">Criar Pagamento</button>
    <pre id="result"></pre>

    <script>
      function pagar() {
        fetch("/create-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: document.getElementById("amount").value,
            description: document.getElementById("description").value
          })
        })
        .then(res => res.json())
        .then(data => {
          document.getElementById("result").textContent = JSON.stringify(data, null, 2);
        });
      }
    </script>
  `);
});

// Criar pagamento
app.post("/create-payment", (req, res) => {
  const { amount, description } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Valor é obrigatório" });
  }

  res.json({
    id: "ATLAS_" + Date.now(),
    amount,
    description,
    status: "PENDING",
    pix_code: "00020126PIX_SIMULADO_ATLASPAY"
  });
});

app.listen(PORT, () => {
  console.log("AtlasPay rodando na porta", PORT);
});
