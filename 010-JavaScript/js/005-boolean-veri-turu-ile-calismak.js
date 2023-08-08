// degisken isimlerinin is, has ile baslatilmasi avantaj saglar.
let isUserActive = false // 0 

// kullanici adi ve sifresi soruldu ve dogrulandi
isUserActive = true
console.log(isUserActive)

let user;

console.log(user)
console.log(Boolean(user))
console.log(Boolean("")) // false
console.log(Boolean("admin")) // true
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log("0.1", Boolean(0.1)) // true
console.log(1 > 3) // false
