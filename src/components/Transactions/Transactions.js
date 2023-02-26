import React from 'react'

function Transactions({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>User Name</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
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

export default Transactions
