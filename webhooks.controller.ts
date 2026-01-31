import { Request, Response } from 'express'
import { processWebhook } from './payments.service'

export async function handleWebhook(req: Request, res: Response) {
  try {
    console.log('📩 Webhook recebido:', req.body)

    await processWebhook(req.body)

    res.status(200).json({ received: true })
  } catch (error) {
    console.error('❌ Erro no webhook:', error)
    res.status(500).json({ error: 'Webhook processing failed' })
  }
}
