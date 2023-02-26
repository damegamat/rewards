import React from 'react'
import Transactions from '../Transactions'
import useTransactions from '../../hooks/useTransactions'

function Dashboard() {
  const { transactions } = useTransactions()

  return (
    <div className='Dashboard'>
      <h1>Dashboard</h1>
      <Transactions transactions={transactions} />
    </div>
  )
}

export default Dashboard
