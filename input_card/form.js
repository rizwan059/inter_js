let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div");
profile.classList.add("profile");

let img = document.createElement("img");
img.setAttribute = "src","https://images.unsplash.com/photo-1755429562521-cb944ea054ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"

let h3 = document.createElement("h3");
h3.textContent = "Rizwan Ali";

let h5 = document.createElement("h5");
h5.textContent = "Struggling Developer";

let para = document.createElement("p");
para.textContent = "sadfsadfsadfsafsafdsdfsadfsadfsaf";


profile.appendChild(img);
card.appendChild(profile);

card.appendChild(h3);
card.appendChild(h5);
card.appendChild(para);


form.appendChild(card); 
});