const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Página inicial
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>ATLASPAY TESTE NOVO</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .checkout {
          background: #020617;
          padding: 20px;
          border-radius: 10px;
          width: 100%;
          max-width: 350px;
        }
        h2 {
          text-align: center;
        }
        input, button {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          border-radius: 6px;
          border: none;
        }
        input {
          background: #020617;
          border: 1px solid #334155;
          color: #fff;
        }
        button {
          background: #22c55e;
          color: #000;
          font-weight: bold;
          cursor: pointer;
        }
        pre {
          background: #020617;
          padding: 10px;
          margin-top: 10px;
          border-radius: 6px;
          font-size: 12px;
          overflow: auto;
        }
      </style>
    </head>
    <body>
      <div class="checkout">
        <h2>AtlasPay</h2>
        <input id="amount" type="number" placeholder="Valor">
        <input id="description" type="text" placeholder="Descrição">
        <button onclick="pagar()">Pagar</button>
        <pre id="result"></pre>
      </div>

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
            document.getElementById("result").textContent =
              JSON.stringify(data, null, 2);
          });
        }
      </script>
    </body>
    </html>
  `);
});
