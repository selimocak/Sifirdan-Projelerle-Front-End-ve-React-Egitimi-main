// Fonksiyonlar ile Calismak
// Temel Kurallar:


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
// console.log(result) 


// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


// function sayHelloToUser() {
//   let user;
//   user = prompt("Adiniz: ")
//   return user
// }

// const user = sayHelloToUser()
// console.log(user)


// 4: Bir Fonksiyon kendisini Tekrar Calistirabilir

function sayHelloToLorem() {
  user = prompt("Adiniz: ")
  // if (user === "Lorem") {
  //   console.log("sayHelloToLorem", user) 
  // } else {
    //   return sayHelloToLorem() 
    // }
    if (user !== "Lorem") {
      return sayHelloToLorem()
    }
      console.log("sayHelloToLorem", user) 
}
// sayHelloToLorem() 

// Eski yaptigimiz bir calismayi fonksiyon olarak duzenlemek:

function userAccess(userId, userAge) {
  if (userId.length === 11 && userAge >= 18 && userAge <= 99) {
    const h1TitleElement = document.querySelector('h1#title')
    h1TitleElement.innerHTML = '<em>Siteye Girebilirsiniz..</em>'
    // if (userAge > 99) {
    //   console.log("Yas Bilgisi Hatali.")  // burada olmasi dogru mu ?
    // }
    // console.log("Sisteme girebilirsiniz.")
  } 
  else if (userId.length !== 11) {
    console.log("TC No Bilgisi Dogru Olmayabilir..")
  }
  else if (userAge > 99) {
    // tersini al operatorunu kullandik.
    console.log("Yas Bilgisi 99'dan buyuk olabilir.")
  }
  else if (userAge < 18) {
    console.log("Yas Bilgisi 18'den kucuk olabilir.")
  }
  else if (userId.length === 11 && userAge < 18) {
    console.log("Siteye giremezsiniz cunku 18 yasindan kucuksunuz.")
  }   
}

userAccess("lorem ipsum", 23) 