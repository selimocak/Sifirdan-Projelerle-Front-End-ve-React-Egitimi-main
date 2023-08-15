// https://javascript.info/comments
// https://code.visualstudio.com/docs/languages/javascript#_jsdoc-support
// https://jsdoc.app/

console.log("info")  // console.log`a aktarilan bilgi 

/* 
birden fazla satirli aciklama
ikinci satir
ucuncu...
*/

// JSDoc Ornegi
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
function sum(num1, num2) {
  return num1 + num2
}

/**
 * Add string to list
 * @param {Array} users
 * @param {string} user
 * @returns
 */
function addToList(users, user) {
  console.log(users.length)  // consol.log'a ilk gelen users icinde kac oge oldugunu bildirir.
  users.push(user)
  return users
}