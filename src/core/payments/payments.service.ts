import { supabase } from '../../lib/supabase'

export async function processWebhook(payload: any) {
  // 1. Salva evento no banco
  await supabase.from('webhook_events').insert({
    provider: 'mercadopago',
    event_type: payload.type || 'unknown',
    payload
  })

  // 2. Se aprovado, cria transaction
  if (payload.data?.status === 'approved') {
    await supabase.from('transactions').insert({
      external_id: payload.data.id,
      gross_amount: payload.data.transaction_amount,
      status: 'paid',
      payment_method: payload.data.payment_method_id
    })
  }
}
