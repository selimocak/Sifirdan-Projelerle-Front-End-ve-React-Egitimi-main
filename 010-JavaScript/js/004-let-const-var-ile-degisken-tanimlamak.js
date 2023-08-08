// rakamla degisken isimleri baslayamaz.

// let 1user = "1. user"
// console.log(1user)

;let user1 = "1. user"
;console.log(user1);
console.log(
  user1
);
// Not : her kodun basinda gorunmeyen bir noktali virgul var.
// Ama yinede satir baslarina noktali virgul eklemiyoruz.

let user;
console.log(user)

// let user = "Sistem Kullanicisi"
user = "SystemUser"

user = "Admin"
console.log(user)

const PASSWORD = 4321;
console.log("Sifre", PASSWORD)


// Bu hatali cunku const ile bir defa tanimlanabilir.
// PASSWORD = "12343242345"
// console.log("Degisen Sifre", PASSWORD)

// Blok icinde tekrar ayni isimler kullanilabilir.
{
  let user = "Asdfg"
  console.log("Blok icinde:", user)
  const PASSWORD = "2131232143242332432"
  console.log("Blok icinde:", PASSWORD)  
}

console.log(user)
console.log("Sifre:", PASSWORD)

console.log("44.satirdaki bilgiye erisebilir miyiz?", userName)

var userName = "44. satirdaki bilgi"
console.info("userName:", userName)

{
  userName = "Blok icindeki bilgi"
  console.info("userName Blok:", userName)
}

// Degisken isimlerinin anlamli olmasini sagla
let i = "1" // bunu kullanmayalim
let x = "info" // bunu kullanmayalim

// bool -> laptop kullaniyor musun ? evet / hayir
// macOs kullaniyor musun ? evet / hayir
// yazilimci misin ? evet / hayir

isMacOsUser = true
isLaptopUser = false
hasPassword = true 