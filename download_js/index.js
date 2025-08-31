let count = 0;

let progress = document.querySelector(".progress");
let percent = document.querySelector("#progress");

let cnt = setInterval(function () {
    
    if (count < 100) {
        count++;
        progress.style.width = `${count}%`
        percent.textContent = `${count}%`
        
    } else {
        document.querySelector(".title").textContent = "✅ Download Completed!";
        // document.querySelector(".title").style.color = "Green✅ Download Completed!";

        clearInterval(cnt);
    } 
    
    cnt.textContent

}, 100);