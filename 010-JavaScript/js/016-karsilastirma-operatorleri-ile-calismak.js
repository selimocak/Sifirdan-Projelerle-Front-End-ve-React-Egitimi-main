// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators
// https://www.w3schools.com/js/js_comparisons.asp


// kullanicinin bilmedigi sistemdeki password bilgisi
const sysPassword = 12345;  // number

// const userPasswordPrompt = prompt("Sifrenizi giriniz:")

// console.log(userPasswordPrompt, typeof(userPasswordPrompt))

const userPasswordPrompt = "12345"  // string

console.log("Sifre dogru mu ? ", sysPassword == userPasswordPrompt)
console.log("typeof", typeof(sysPassword) == typeof(userPasswordPrompt)) 
console.log("Sifre ve Veri Tipi dogru mu ? ", sysPassword === userPasswordPrompt)

const user = "admin"
console.log("normal kullanici mi ? ", user != "normalUser")

const year = 2000

console.log("2000 yilindan buyuk mu ? ", 2010 > year)
console.log("2000 yilindan buyuk mu ? ", 1980 > year)

const ageLimit = 18
const userAge = 15
console.log("kullanici sisteme girebilir mi 18+ ? ", userAge >= ageLimit)
console.log("kullanici sisteme girebilir mi 18 yasindan kucuk olanlar ? ", userAge <= ageLimit) 

const userName = "Mehmet"
const userPassword = 54765

console.log("user bilgisi 3 karakterden buyuk mu ve password bilgisi var mi ? ", Boolean(userName.length > 3 && userPassword))
console.log("user bilgisi 3 karakterden buyuk mu veya password bilgisi var mi ? ", userName.length > 3 || userPassword)