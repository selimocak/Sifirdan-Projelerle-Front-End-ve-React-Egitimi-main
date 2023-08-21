// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects


const firstName = "Lorem"
const lastName = "Ipsum"
const age = 21

const user = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  entries: [1,2,3,4]
}

const userV2 = {
  firstName,
  lastName,
  age,
  hobies: {daily: ["spor", "music"]} 
}

console.table(user)

console.table(userV2)

const input = "firstName"

console.log("input icindeki degisken bilgisini kullanabiliriz.", user[input]) 


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993)

console.table(myCar)  

delete myCar.year
console.table(myCar)   