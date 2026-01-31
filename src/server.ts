import express from 'express'
import bodyParser from 'body-parser'
import { handleWebhook } from './core/payments/webhooks.controller'

const app = express()

// Middleware para JSON
app.use(bodyParser.json())

// Healthcheck (pra saber se o servidor está vivo)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'AtlasPay API' })
})

// Webhook Mercado Pago (e outros no futuro)
app.post('/webhooks/payments', handleWebhook)

// Porta
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 AtlasPay API rodando na porta ${PORT}`)
})
