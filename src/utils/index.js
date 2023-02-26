import { REWARD_MULTIPLIER, REWARD_POINTS_LIMITS } from './constants'

// TODO: In current data structure reward points calculation should be on backend side
export const calcRewardPoints = (price) => {
  if (price > REWARD_POINTS_LIMITS.extra)
    return (
      (price - REWARD_POINTS_LIMITS.extra) * REWARD_MULTIPLIER.extra +
      REWARD_POINTS_LIMITS.small
    )
  if (price > REWARD_POINTS_LIMITS.small)
    return (price - REWARD_POINTS_LIMITS.small) * REWARD_MULTIPLIER.small
  return 0
}

//TODO: Calculations of users rewards should be on backend side. Backend should expose API, which will allow to select range e.g months, year, page, items per page,
// CalcUlus Rewards only works for transactions that are already sorted up to 3 months
export const calcUsersRewards = (transactions) =>
  transactions.reduce((prev, next) => {
    const points = calcRewardPoints(Number(next.item.itemPrice))
    const month = new Date(next.date).getMonth()

    // check if user is already in arr
    const userIndex = prev.findIndex((item) => item.userId === next.user.userId)

    if (userIndex >= 0) {
      // Add points to an existing user

      const { rewards } = prev[userIndex]
      // check if month is in user rewards
      const existingMonth = rewards[month]
      let monthlyPoints = points
      if (existingMonth) {
        monthlyPoints += existingMonth
      }

      const newRewards = {
        ...rewards,
        [month]: monthlyPoints,
        total: rewards.total + points,
      }

      // assign new rewards to the right user
      prev[userIndex] = { ...prev[userIndex], rewards: newRewards }
      return [...prev]
    } else {
      // Create new user rewards object

      return [
        ...prev,
        {
          userId: next.user.userId,
          userName: next.user.userFullName,
          rewards: {
            [month]: points,
            total: points,
          },
        },
      ]
    }
  }, [])

export const formatPoints = (value) => value || 0
