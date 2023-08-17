const userId = prompt("TC No Giriniz: ")
const userAge = prompt("Yasinizi Giriniz: ")

// not : if her zaman true'da calisir.
/**
 * if (true) {console.log('calisti..')}
 * if (false) {console.log('calismaz..')}
 * if (!false) {console.log('calisti..')}
 */

// TC length 11 olacak 

// negatiften pozitife,
// if (userId.length !== 11) {
//   console.log("TC No Bilgisi Dogru Olmayabilir..")
// } else if (userId.length === 11 && userAge < 18) {
//   console.log("Siteye giremezsiniz 18 yasindan kucuksunuz.")
// } else if (userId.length === 11 && userAge >= 18) {
//   console.log("Sisteme girebilirsiniz.")
// } 

// pozitiften negatife,
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
