
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// arr.reduce((onceki, simdiki) => {yapilacak islem}, ilkDeger )

const items = [1, 2, 3, 4, 5]

const sum = items.reduce((accumulator, current) => accumulator + current, 0)

console.log(sum)


const prices = [100, 200, 10, 40, 500, 90]

const maxPrice = prices.reduce((acc, current) => Math.max(acc, current))

console.log(maxPrice)


const itemPrices = [
  {name: "Laptop", price: 1000},
  {name: "iPad", price: 700},
  {name: "Smart Phone", price: 800},
  {name: "Keyboard", price: 150},
]

const sumItemPrices = itemPrices.reduce((acc, current) => acc + current.price, 0)

console.log(sumItemPrices) 

const users = ["Lorem", "Ipsum", "Furkan", "Talha", "Lorem", "Ipsum"]

const countedUsers = users.reduce((allUsers, current) => {
  const count = allUsers[current] ?? 0;
  return {
    ...allUsers,
    [current]: count + 1
  }
}, {})

console.log(countedUsers)