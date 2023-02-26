import { useEffect, useState } from 'react'
import { fetchTransactions } from '../services'

function useTransactions() {
  //TODO: for a global state consider e.g useContext (with reducer) / Redux
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = ''

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        // Fetch and set transactions
        const newTransactions = await fetchTransactions()
        setTransactions(newTransactions)
      } catch (e) {
        console.error(e)
        setError('Can not fetch transactions :(, please try later')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { transactions, loading, error }
}

export default useTransactions
