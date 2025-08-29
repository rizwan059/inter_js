let email = document.querySelector("#email");
let password = document.querySelector("#password");

let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    document.querySelector("#emailError").textContent = "";
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if (!emailans) {
        document.querySelector("#emailError").textContent = "Invalid email";
    } else {
        document.querySelector("#emailError").textContent = "Everything is fine";
        document.querySelector("#emailError").style.color = "Green";

    }


    if (!passwordans) {
        document.querySelector("#passwordError").textContent = "Invalid password";
    } else {
        document.querySelector("#passwordError").textContent = "Everything is fine";
        document.querySelector("#passwordError").style.color = "Green";

    }

});