const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "teacher" && password === "test") {
        alert("You have successfully logged in.");
        window.location = "file:///Users/louisstalet/Desktop/Computer%20Science/12/IA/Website/teacher-page.html";
    } 
    if (username === "student" && password === "test") {
        alert("You have successfully logged in.");
        window.location = "file:///Users/louisstalet/Desktop/Computer%20Science/12/IA/Website/student-page.html";
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})