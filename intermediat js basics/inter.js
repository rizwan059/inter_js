// let lis = document.querySelectorAll("li");
// for (let i = 0; i < lis.length; i++){

//     console.log(lis[i].textContent);
// }

// add a title to a div via js 

// let a = document.querySelector("div");
// a.setAttribute("title", "lorem ipsum")

//how to change the font size via querry selector
let font = document.querySelectorAll("p");
font.forEach(function(elem){
    elem.style.fontSize = "18px";
})