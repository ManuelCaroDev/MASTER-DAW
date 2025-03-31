/* const title = document.querySelector("h1");
title.remove(); */

//EVENTOS
const btnTheme = document.querySelector("#btnTheme");

btnTheme.addEventListener("click", (ev) => {document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btnTheme.textContent = "😎";
    }else{
        btnTheme.textContent = "🌚";
    }

});

//

const result = document.querySelector("#result");

window.addEventListener("scroll", (ev) => {
    result.textContent = ev.target.defaultView.pageYOffset
});