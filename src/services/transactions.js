export const fetchTransactions = async () => {
  const res = await fetch('transactions.json')
  return res.json()
}
