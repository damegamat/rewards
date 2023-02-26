import React from 'react'
import Transactions from '../Transactions'
import Loader from '../Loader'
import useTransactions from '../../hooks/useTransactions'

function Dashboard() {
  const { transactions, loading, error } = useTransactions()

  return (
    <Loader isLoading={loading}>
      <div className='Dashboard'>
        <h1>Dashboard</h1>
        {error ? (
          <span>{error}</span>
        ) : (
          <div>
            <Transactions transactions={transactions} />
          </div>
        )}
      </div>
    </Loader>
  )
}

export default Dashboard
