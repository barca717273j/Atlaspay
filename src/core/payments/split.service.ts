export async function processTransactionSplit(data: {
  transactionId: string
  grossAmount: number
  platformFee: number
}) {
  const platformAmount = data.grossAmount * data.platformFee
  const sellerAmount = data.grossAmount - platformAmount

  // aqui você grava no ledger depois
}
