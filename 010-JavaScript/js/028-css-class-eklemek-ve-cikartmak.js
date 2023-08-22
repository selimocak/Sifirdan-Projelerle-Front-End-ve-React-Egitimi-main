// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

const titleElement = document.querySelector('#title')

console.log(titleElement.classList)
titleElement.classList.remove("text-primary")  // ister bir class ister birden fazla class silebiliriz.

titleElement.classList.add("text-danger", "display-1")  // ister bir class ister birden fazla class ekleyebiliriz. 

titleElement.classList.toggle("bg-primary")  // ekle veya cikar. 