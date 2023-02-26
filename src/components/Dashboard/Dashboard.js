import React, { useEffect, useState } from 'react'
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
      <h2>Transactions</h2>
      <div>
        <table>
          <thead>
            <th>Number</th>
            <th>User Name</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Price</th>
          </thead>
          <tbody>
            {transactions.map(({ date, user, item, transactionId }, i) => (
              <tr key={transactionId}>
                <td>{i}</td>
                <td>{user.userFullName}</td>
                <td>{item.itemName}</td>
                <td>{new Date(date).toLocaleDateString()}</td>
                <td>{item.itemPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
