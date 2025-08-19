let sel  = document.querySelector("select");
let selectionDevice = document.querySelector("#selDev");

sel.addEventListener("change", function(dets){
   
    selectionDevice.textContent = `${dets.target.value} Device Selected`;
    // console.log(dets);

})