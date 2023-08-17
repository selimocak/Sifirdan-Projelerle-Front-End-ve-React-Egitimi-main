// Diziler -> Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const users = [1, 2, 3, false, true, null, [4, 5, 6], "string1", "string2"]

console.log("users :", users)
console.log("users.length", users.length)


const otherUsers = []
console.log("otherUsers.length", otherUsers.length)

const tech = new Array(100)
console.log("tech.length", tech.length)
console.log("tech Arr:", tech) 

const todo = new Array("item 1", "item 2")
console.log("todo", todo) 

console.log("Type Bilgisi Nedir ? ", typeof(users))     
console.log("{} Obj -> Type Bilgisi Nedir ? ", typeof( {} ))

console.log("Array mi ? ", Array.isArray(users)) 


// Bilgiye Erismek;
console.log(users[0], users[3], users[7]) 
console.log(users[users.length -1]) // Array'daki son ogeye erismek icin bu cok onemli.
console.log(users[users.length -2]) // Array'da sondan bir onceki ogeye erisir.


// Yeni Oge Eklemek:
// Sona Ekleme; 
users.push("Sona")
console.log(users)
// Basa Ekleme;
users.unshift("Basa")
console.log(users)

// Bilgi Degistirmek;
users[3] = "asdasd"
console.log(users)

// Bir Ogeyi Silmek;
// sondaki 
const popItem = users.pop()  // Son Ogeyi Cikarir..
console.log(users)
console.log(popItem)

// bastaki
const firstItem = users.shift()  // Ilk Ogeyi Cikarir..
console.log(users)
console.log(firstItem) 

