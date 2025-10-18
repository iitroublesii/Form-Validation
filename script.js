// Form and Input Elements
const javaForm = document.getElementById("javaForm");
const usernameJS = document.getElementById("usernameJS");
const emailJS = document.getElementById("emailJS");
const jsMessage = document.getElementById("jsMessage");

javaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear messages

    jsMessage.textContent = "";
    jsMessage.className = "";

    // Username length

    const username = usernameJS.value.trim();
    if (username.length < 5) {
        jsMessage.textContent = "Username must be at least 5 characters.";
        jsMessage.className = "error";
        return;
    }

    // Validate E-mail

    const email = emailJS.value.trim();
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        jsMessage.textContent = "Please enter a valid email address.";
        jsMessage.className = "error";
        return;
    }

    // Correct inputs

    jsMessage.textContent = "Your form looks great!";
    jsMessage.className = "success";
});