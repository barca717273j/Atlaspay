import { Request, Response } from 'express'
import { processWebhook } from './payments.service'

export async function handleWebhook(req: Request, res: Response) {
  await processWebhook(req.body)
  res.sendStatus(200)
}
