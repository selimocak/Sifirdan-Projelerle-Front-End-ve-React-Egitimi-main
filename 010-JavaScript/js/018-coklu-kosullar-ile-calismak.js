const userId = prompt("TC No Giriniz: ")
const userAge = prompt("Yasinizi Giriniz: ")

// not : if her zaman true'da calisir.
/**
 * if (true) {console.log('calisti..')}
 * if (false) {console.log('calismaz..')}
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
  // if (userAge > 99) {
  //   console.log("Yas Bilgisi Hatali.")  // burada olmasi dogru mu ?
  // }
  console.log("Sisteme girebilirsiniz.")
} else if (!userAge <= 99) {
  console.log("Yas Bilgisi 99'dan buyuk olabilir.")
  // tersini al operatorunu kullandik.
} else if (userAge > 99) {
  console.log("Yas Bilgisi 99'dan buyuk olabilir.")
}
  else if (userId.length !== 11) {
  console.log("TC No Bilgisi Dogru Olmayabilir..")
}
  else if (userId.length === 11 && userAge < 18) {
  console.log("Siteye giremezsiniz cunku 18 yasindan kucuksunuz.")
} 
