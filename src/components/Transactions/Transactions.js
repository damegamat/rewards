import React from 'react'

//TODO: We have two very similar tables, we can consider a separate component for a Table and use it in those places
function Transactions({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>
      {!transactions.length ? (
        <span>There are no transactions</span>
      ) : (
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
                  <td>{i + 1}</td>
                  <td>{user.userFullName}</td>
                  <td>{item.itemName}</td>
                  <td>{new Date(date).toLocaleDateString()}</td>
                  <td>{item.itemPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Transactions
