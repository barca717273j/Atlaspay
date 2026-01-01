import express from "express";
import mercadopago from "mercadopago";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

// ROTA PIX REAL
app.post("/pix", async (req, res) => {
  try {
    const { valor, descricao, email } = req.body;

    const pagamento = await mercadopago.payment.create({
      transaction_amount: Number(valor),
      description: descricao || "Pagamento AtlasPay",
      payment_method_id: "pix",
      payer: {
        email: email
      }
    });

    return res.json({
      status: "criado",
      id: pagamento.body.id,
      qr_code: pagamento.body.point_of_interaction.transaction_data.qr_code,
      qr_code_base64: pagamento.body.point_of_interaction.transaction_data.qr_code_base64
    });

  } catch (erro) {
    return res.status(500).json({
      erro: "Erro ao criar PIX",
      detalhe: erro.message
    });
  }
});

app.listen(3000, () => {
  console.log("🚀 AtlasPay rodando na porta 3000");
});
