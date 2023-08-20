// Arrow functions Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


// () => {} // suslu parantez icinde birden fazla islem yapilabilir..
// () => ...

function helloFunction(name) {
  console.log(name)
}

const helloArrowFunction = (name) => {
  console.log(name) 
}

const helloArrowFunctionV2 = (name) => console.log(name)

const helloArrowFunctionV3 = name => console.log(name)  // eger bir parametre varsa parantez gerek yok