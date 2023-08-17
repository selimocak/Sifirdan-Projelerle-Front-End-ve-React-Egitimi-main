
// Array Metodlari:
// https://www.w3schools.com/js/js_array_methods.asp

const femaleUsers = ["Melda", "Kayra", "Ceren"]
const maleUsers = ["Metin", "Kemal", "Can"]
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mixItems = [1, 2, 200, 100, 1000, 99, 3, 4, 5, 6, 7, 8, 9]

// String to Array (split)
const users = "Melda,Kayra,Kemal,Can"
const usersStrToArray = users.split(",") 
console.log(usersStrToArray)

const textInfo = "Lorem ipsum dolor..."
const textInfoToArray = textInfo.split(" ")
console.log(textInfoToArray)  

// slice
console.log(items.slice(1))
console.log(items)
console.log(items.slice(1, 5)) 

// includes
console.log("Kayra var mi ? ", femaleUsers.includes("Kayra"))

// indexOf
console.log("Kayra nerede ? ", femaleUsers.indexOf("Kayra"))
console.log("Ayla nerede ? ", femaleUsers.indexOf("Ayla"))  // -1 degeri geldi, yani yok demek.

// sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// toString

// join

// copy?
