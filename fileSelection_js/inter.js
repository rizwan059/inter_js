let btn = document.querySelector("#btn");
let fileInp = document.querySelector("#fileInp");

btn.addEventListener("click", function(){
    fileInp.click();
})

fileInp.addEventListener("change", function(dets){
    console.log(dets.target.files[0].name);
})  