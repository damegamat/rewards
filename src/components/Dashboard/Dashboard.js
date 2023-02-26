import React, { useEffect, useState } from 'react'
import Transactions from '../Transactions'
import { fetchTransactions } from '../../services'

function Dashboard() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    ;(async () => {
      const newTransactions = await fetchTransactions()
      setTransactions(newTransactions)
    })()
  }, [])

  return (
    <div className='Dashboard'>
      <h1>Dashboard</h1>
      <Transactions transactions={transactions} />
    </div>
  )
}

export default Dashboard
