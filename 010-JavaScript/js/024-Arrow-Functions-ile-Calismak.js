// Arrow functions Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


// () => {} // suslu parantez icinde birden fazla islem yapilabilir..
// () => ...

function helloFunction(name) {
  console.log(name)
}

const arrowFunction = (name) => {
  console.log(name) 
}

const arrowFunctionV2 = (name) => console.log(name)

const arrowFunctionV3 = name => console.log(name)  // eger bir parametre varsa parantez gerek yok.

const arrowFunctionV3_2 = (name = "lorem") => console.log(name) 

const arrowFunctionV4 = (firstName, lastName) => console.log(firstName, lastName) 

const arrowFunctionV5 = (firstName, lastName) => {
  const fullName = `${firstName.upperCase()} ${lastName.upperCase()}`
  return fullName
}  

arrowFunctionV2("lorem")
arrowFunctionV3_2() 


const multiplyWithReturn = (num1, num2) => {
  return num1 * num2
}


const multiplyWithReturnV2 = (num1, num2) => num1 * num2  


// Not : Objeler {} ile baslar icerisindeki bilgileri bazen Arrow Function ile gonderebiliriz.

// Arrow Funciton ile Obje Donmek: 
// const user = {userName: "Mehmet"} 

const userNameObj = (user) => {
  return {userName: user.toUpperCase()}
}

const userNameObjV2 = (user) => ({userName: user.toUpperCase()})


const returnUserName = userNameObj("Lorem")
const returnUserNameV2 = userNameObj("Lorem")
console.log(returnUserNameV2) 



