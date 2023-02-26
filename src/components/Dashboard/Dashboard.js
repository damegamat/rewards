import React from 'react'
import Transactions from '../Transactions'
import Loader from '../Loader'
import useTransactions from '../../hooks/useTransactions'
import UsersRewards from '../UsersRewards'
import { calcUsersRewards } from '../../utils'

function Dashboard() {
  const { transactions, loading, error } = useTransactions()
  const usersRewards = calcUsersRewards(transactions)
  console.log(usersRewards)
  return (
    <Loader isLoading={loading}>
      <div className='Dashboard'>
        <h1>Dashboard</h1>
        {error ? (
          <span>{error}</span>
        ) : (
          <div>
            <Transactions transactions={transactions} />
            <UsersRewards usersRewards={usersRewards} />
          </div>
        )}
      </div>
    </Loader>
  )
}

export default Dashboard
