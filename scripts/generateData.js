const fs = require('fs')
const { faker } = require('@faker-js/faker')

// Create 10 users
const users = Array.from({ length: 10 }, () => ({
  userId: faker.datatype.uuid(),
  userFullName: faker.name.fullName(),
}))

// Create 100 items
const items = Array.from({ length: 100 }, () => ({
  itemId: faker.datatype.uuid(),
  itemName: faker.commerce.productName(),
  itemPrice: faker.commerce.product(),
}))

// Create 20 transactions
const transactions = Array.from({ length: 20 }, () => ({
  transactionsId: faker.datatype.uuid(),
  data: faker.date.between(new Date('2023/01/01'), new Date('2023/03/31')),
  user: users[faker.random.numeric()],
  item: items[faker.datatype.number({ min: 0, max: 99 })],
}))

// Write dummy data to a public/transactions
fs.writeFile(
  './public/transactions.json',
  JSON.stringify(transactions),
  (err) => {
    if (err) throw err
    console.log('Data saved to transactions file')
  }
)
