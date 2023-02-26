import { calcRewardPoints, formatPoints, calcUsersRewards } from '.'
import { MockTransactions } from '../../__mocks__/transactionsMock'
import { MockUsersRewards } from '../../__mocks__/usersRewardsMock'

describe('calcRewardPoints', () => {
  describe('when the price <= 50', () => {
    it('returns 0', () => {
      expect(calcRewardPoints(20)).toBe(0)
    })
  })
  describe('when the price <= 100', () => {
    it('should return 20 if the price is 70', () => {
      expect(calcRewardPoints(70)).toBe(20)
    })
  })
  describe('when the price above 100', () => {
    it('should return 250 if the price is 200', () => {
      expect(calcRewardPoints(200)).toBe(250)
    })
  })
})

describe('calcUsersRewards', () => {
  describe('when there are no transactions', () => {
    it('returns empty array', () => {
      expect(calcUsersRewards([])).toEqual([])
    })
  })
  describe('when there are transactions', () => {
    describe('when there is one transaction in month', () => {
      it('returns correct calculated users rewards', () => {
        expect(calcUsersRewards([{ ...MockTransactions[1] }])).toEqual([
          { ...MockUsersRewards[1] },
        ])
      })
    })

    describe('when there are more then one transaction in month', () => {
      it('returns correct calculated users rewards', () => {
        const result = [
          {
            ...MockUsersRewards[1],
            rewards: {
              2: MockUsersRewards[1].rewards[2] * 2,
              total: MockUsersRewards[1].rewards.total * 2,
            },
          },
        ]
        expect(
          calcUsersRewards([
            { ...MockTransactions[1] },
            { ...MockTransactions[1] },
          ])
        ).toEqual(result)
      })
    })
  })

  describe('when there are more then one transaction per months', () => {
    it('returns correct calculated users rewards', () => {
      const MockTransaction = {
        ...MockTransactions[1],
        date: '2023-02-08T05:35:34.822Z',
      }

      const result = [
        {
          ...MockUsersRewards[1],
          rewards: {
            1: MockUsersRewards[1].rewards[2],
            2: MockUsersRewards[1].rewards[2],
            total: MockUsersRewards[1].rewards.total * 2,
          },
        },
      ]
      expect(
        calcUsersRewards([{ ...MockTransactions[1] }, MockTransaction])
      ).toEqual(result)
    })
  })
})

describe('formatPoints', () => {
  describe('when the value is undefined', () => {
    it('returns 0', () => {
      expect(formatPoints(undefined)).toBe(0)
    })
  })

  describe('when the value is defined', () => {
    it('returns defined number', () => {
      expect(formatPoints(100)).toBe(100)
    })
  })
})
