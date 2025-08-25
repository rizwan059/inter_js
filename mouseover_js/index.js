let scr = document.querySelector("#color");

window.addEventListener("mousemove", function(dets){
    scr.style.top = dets.clientY + "px";
    scr.style.left = dets.clientX + "px";
    
})
