const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        window.location="https://temp123829102hgdewnu.herokuapp.com/"
    } 
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "stin" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://temp123829102hgdewnu.herokuapp.com/"
    } 
})