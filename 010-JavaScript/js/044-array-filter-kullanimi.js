
const priceList = [10, 20, 30, 400, 300, 100, 500, 30, 50, 70, 90]

// const newPriceList = priceList.filter(price => {
//   return price >= 50
// })

// const newPriceList = priceList.filter(item => item >= 50)

// console.log(newPriceList)

const users = [
  {name: "lorem", isActive: false},
  {name: "ipsum", isActive: false},
  {name: "dolor", isActive: false},
  {name: "Ayla", isActive: true},
  {name: "Aydin", isActive: true},
  {name: "Ahmet", isActive: true},
  {name: "Tuba", isActive: true},
]

const activeUsers = users.filter(user => user.isActive)

console.log(activeUsers)


