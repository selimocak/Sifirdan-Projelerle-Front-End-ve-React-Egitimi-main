// Fonksiyonlar ile Calismak
// Temel Kurallar:
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir
// 4: Bir Fonksiyon kendisini Tekrar Calistirabilir

// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Parametre Almayabilir:

function hello() {  //  "()" Hic parametre almayabilir.
  console.log("Asdf Qwert")
}

// Fonskiyonu Calistirmak:
hello()

// bir veya birden fazla parametreli fonksiyonlar;
function greetings(name) {
  console.log(`Merhaba ${name ? name : 'User' }`) 
}
greetings("Cvbnm")  


function greetings_v2(firstName, lastName) {
  console.log(`Merhaba ${firstName ? firstName : 'Firstname' } ${lastName ? lastName : 'Lastname' }`) 
}
greetings_v2("Lorem", "Ipsum") 


function greetings_v3(firstName = "", lastName = "", age = 18) {
  console.log("greetings_v3;")
  console.log(`Merhaba ${firstName} ${lastName} -> ${age}`) 
}
greetings_v3("Lorem", "Ipsum") 


// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir:


function multiply(num1, num2) {
  num1 * num2
  // disari herhangi bir bilgi gondermese de iceride bir islem yapiyor 
} 
multiply(10, 20)


function selectHtmlItemAddInformation (element, info) {
  const item = document.querySelector(element)
  item.innerHTML = info
}
selectHtmlItemAddInformation('#title', "Hello")

// Return kullanimi;
function multiply_with_return(num1, num2) {
  return num1 * num2
}

const result = multiply_with_return(10, 30)
console.log(result) 