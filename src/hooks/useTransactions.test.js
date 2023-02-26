import { renderHook, waitFor, act } from '@testing-library/react'
import { MockTransactions } from '../../__mocks__/transactionsMock'
import * as mockedFetchTransactions from '../services/transactions'
import useTransactions from './useTransactions'

const MockedFetchTransactions = jest.spyOn(
  mockedFetchTransactions,
  'fetchTransactions'
)
const MockConsole = jest.spyOn(console, 'error')

describe('useTransactions ', () => {
  describe('successfully fetched the data', () => {
    describe('fetched empty data', () => {
      beforeAll(async () => {
        MockedFetchTransactions.mockImplementationOnce(() =>
          Promise.resolve([])
        )
      })

      it('returns empty transactions and set loading to false', async () => {
        const { result } = await act(() =>
          waitFor(() => renderHook(() => useTransactions()))
        )

        expect(result.current.transactions).toEqual([])
        expect(result.current.loading).toBe(false)
      })
    })

    describe('fetched transactions', () => {
      beforeAll(async () => {
        MockedFetchTransactions.mockImplementationOnce(() =>
          Promise.resolve(MockTransactions)
        )
      })

      it('returns transactions and set loading to false', async () => {
        const { result } = await act(() =>
          waitFor(() => renderHook(() => useTransactions()))
        )

        expect(result.current.transactions).toEqual(MockTransactions)
        expect(result.current.loading).toBe(false)
      })
    })
  })

  describe('failed to fetch the data', () => {
    const res = 'error'
    describe('fetched empty data', () => {
      beforeAll(async () => {
        MockedFetchTransactions.mockImplementationOnce(() =>
          Promise.reject('err')
        )
        MockConsole.mockImplementationOnce(() => {})
      })

      it('set and log error, set loading to false', async () => {
        const { result } = await act(() =>
          waitFor(() => renderHook(() => useTransactions()))
        )

        expect(result.current.error).toEqual(
          'Can not fetch transactions :(, please try later'
        )
        expect(result.current.loading).toBe(false)
        expect(MockConsole).toHaveBeenCalledTimes(1)
        expect(MockConsole).toHaveBeenCalledWith('err')
      })
    })
  })
})
