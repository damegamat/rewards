import React from 'react'
import { render, screen } from '@testing-library/react'
import Transactions from './Transactions'
import { MockTransactions } from '../../../__mocks__/transactionsMock'

describe('Transactions', () => {
  describe('when there are no transactions', () => {
    beforeEach(() => {
      render(<Transactions transactions={[]} />)
    })

    it('renders no transaction text', () => {
      expect(screen.getByText(/no transactions/i)).toBeInTheDocument()
    })
  })

  describe('when there is at least one transaction', () => {
    beforeEach(() => {
      render(<Transactions transactions={MockTransactions} />)
    })

    it('should render transaction item', () => {
      expect(
        screen.getByRole('cell', {
          name: MockTransactions[0].user.userFullName,
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('cell', { name: MockTransactions[0].item.itemName })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('cell', {
          name: new Date(MockTransactions[0].date).toLocaleDateString(),
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('cell', { name: MockTransactions[0].item.itemPrice })
      ).toBeInTheDocument()
    })
  })
})
