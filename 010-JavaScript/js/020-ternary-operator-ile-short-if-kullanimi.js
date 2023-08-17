const userName = "Ali Mehmet"
const age = 19;
const h1TitleElement = document.querySelector('#title')

// if (age >= 18) {
//     h1TitleElement.innerHTML = `Sitemize Hosgeldin, ${userName}`
// } else {
//     h1TitleElement.innerHTML = `Sitemize Giris Yapamazsin, ${userName}`
// }

// kosul ? dogruysa, : yanlissa
// const info = age >= 18 ? `Sitemize Hosgeldin, ${userName}` : `Sitemize Giris Yapamazsin, ${userName}` 

// h1TitleElement.innerHTML = `${info}`
// h1TitleElement.innerHTML = info
// h1TitleElement.innerHTML = `${age >= 18 && 'Sitemize Hosgeldin, ' + userName}`
h1TitleElement.innerHTML = `${age >= 18 ? 'Sitemize Hosgeldin, ' + userName : 'Sitemize Giris Yapamazsin,' + userName}` 
