// https://developer.mozilla.org/en-US/docs/Web/API/Document/title
// document.title = prompt("En sevdigin dil nedir ? ", "JavaScript")

document.title = "JS -> ES6+"

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

// h1 icindeki bilgi:
// document.getElementsByTagName('h1')[0].innerHTML
console.log(
  document.getElementsByTagName('h1')[0].innerHTML
)


// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// document.getElementsById('title').innerHTML = 'js'

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
console.log(
  document.getElementsByClassName('text-primary')
)


// Bundan sonra secim icin sadece asagidaki iki yontemi kullanacagiz;
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// etiketle sec:
const h1Element = document.querySelector('h1')
const firstTitleClass = document.querySelector('.title')
const titleId = document.querySelector('#title')

console.log(h1Element.innerHTML)
console.log(firstTitleClass.innerHTML)
console.log(titleId.innerHTML)

const appElement = document.querySelector('#app')
appElement.innerHTML = "<h2>React App Buraya Eklendi</h2>"

// ilk div icindeki p icindeki ilk span
const spanElement = document.querySelector('#info>p>span')
console.log(spanElement)


// birden fazla etiket secmek ? 
const listItems = document.querySelectorAll('.list-item')
console.log(listItems)
