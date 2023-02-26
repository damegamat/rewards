import React from 'react'
import { render, screen } from '@testing-library/react'
import UsersRewards from './UsersRewards'
import { MockUsersRewards } from '../../../__mocks__/usersRewardsMock'

describe('UsersRewards', () => {
  describe('when there are no transactions', () => {
    beforeEach(() => {
      render(<UsersRewards usersRewards={[]} />)
    })

    it('renders no rewards text', () => {
      expect(
        screen.getByText(/No users rewards in last 3 months/i)
      ).toBeInTheDocument()
    })
  })

  describe('when there is at least one user rewards', () => {
    beforeEach(() => {
      render(<UsersRewards usersRewards={MockUsersRewards} />)
    })

    it('should render user rewards item', () => {
      expect(
        screen.getByRole('cell', {
          name: MockUsersRewards[0].userName,
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('cell', { name: MockUsersRewards[0].rewards[1] })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('cell', { name: MockUsersRewards[0].rewards[2] })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('cell', { name: MockUsersRewards[0].rewards.total })
      ).toBeInTheDocument()
    })
  })
})
