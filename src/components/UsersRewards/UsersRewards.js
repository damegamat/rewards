import React from 'react'
import { formatPoints } from '../../utils'

function UsersRewards({ usersRewards }) {
  return (
    <div>
      <h2>Users Rewards</h2>
      {!usersRewards.length ? (
        <span>No users rewards in last 3 months</span>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>January</th>
                <th>February</th>
                <th>March</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {usersRewards.map(({ userName, userId, rewards }) => (
                <tr key={userId}>
                  <td>{userName}</td>
                  <td>{formatPoints(rewards[0])}</td>
                  <td>{formatPoints(rewards[1])}</td>
                  <td>{formatPoints(rewards[2])}</td>
                  <td>{rewards.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default UsersRewards
