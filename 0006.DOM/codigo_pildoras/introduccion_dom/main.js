/* const title = document.body.getElementsByTagName("h1"); */

const title = document.querySelector("h1");

const title2 = document.querySelector("h1");

console.log(title);
console.log(title2);

const divP = document.querySelector("div > p"); //querySelector solo coje el primer elemntos

const divPAll = document.querySelectorAll("div > p"); //querySelectorAll coje todos los elementos

console.log(title.parentElement);

const div = document.querySelector("#paragraphdiv");

console.log(div.childNodes);


