// Kosullar ile Calismak
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// [eger] kullanicini verdigi yas bilgisi 18'e esit veya buyukse sisteme girdin bilgisi alsin..


/* 
eger (kosul) {
  yapilacak islem
} degilse // kosul yok {

}
*/

const userAge = prompt("Lutfen Yasinizi Giriniz..")

if (userAge >= 18) {
  // suslu parantezler blok anlamina gelir ve bircok yerde karsilasacagiz.
  console.log("Sisteme Girdin.")
} else {
  // burasi tehlikeli!!
  // window.location.replace("http://stackoverflow.com")
} 