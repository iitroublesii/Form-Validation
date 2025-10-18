const javaForm = document.getElementById("javaForm");
const usernameJS = document.getElementById("usernameJS");
const emailJS = document.getElementById("emailJS");
const jsMessage = document.getElementById("jsMessage");

javaForm.addEventListener("submit", function (event) {
    event.preventDefault();
    jsMessage.textContent = "";
    jsMessage.className = "";

    const username = usernameJS.value.trim();
    if (username.length < 5) {
        jsMessage.textContent = "Username must be at least 5 characters.";
        jsMessage.className = "error";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailJS.value.trim())) {
        jsMessage.textContent = "Please enter a valid email address.";
        jsMessage.className = "error";
        return;
    }

    jsMessage.textContent = "Your form looks great!";
    jsMessage.className = "success";
});