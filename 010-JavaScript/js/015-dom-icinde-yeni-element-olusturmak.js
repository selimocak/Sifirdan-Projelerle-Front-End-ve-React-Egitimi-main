// DOM icinde yeni oge olusturmak.
const todoList = document.querySelector('ul#todoList')

// const todoFirstItem = document.querySelector('ul>.list-item')
// const todoFirstItem = todoList.querySelector('li')
const todoFirstItem = document.querySelector('ul#todoList>li:first-child')
const todoLastItem = document.querySelector('ul#todoList>li:last-child')

console.log(todoList)   
console.log(todoFirstItem)
console.log(todoLastItem)


// Hero infoyu body icine eklemek
const heroElement = document.createElement('div')
heroElement.innerHTML = "<h1>Hero Bilgisi</h1>"
// en sona : document.body.append(heroElement)
// en basa : document.body.prepend(heroElement)
document.body.prepend(heroElement)

const userPrompt = prompt("XDXDXDXDXD ? ")

// console.log(userPrompt)

const newTodoElement = document.createElement('li')
newTodoElement.innerText = userPrompt

todoList.prepend(newTodoElement)