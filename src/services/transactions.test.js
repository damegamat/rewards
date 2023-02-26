import { MockTransactions } from '../../__mocks__/transactionsMock'
import { fetchTransactions } from './transactions'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MockTransactions),
  })
)

describe('transactions', () => {
  it('calls fetch and returns mock transactions', async () => {
    const result = await fetchTransactions()
    expect(fetch).toBeCalled()
    expect(result).toEqual(MockTransactions)
  })
})
