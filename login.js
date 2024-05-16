document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const submitButton = document.querySelector(".btn-submit");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const username = loginForm.elements["username"].value;
        const password = loginForm.elements["password"].value;


        if (!validateUsername(username) || !validatePassword(password)) {
            return;
        }
        window.location.href = "/main.html";
    });
});

function validateUsername(username) {
    const usernameField = document.getElementById("username");
    if (!username) {
        usernameField.classList.add("is-invalid");
        usernameField.nextElementSibling.textContent = "Username is required.";
        return false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        usernameField.classList.add("is-invalid");
        usernameField.nextElementSibling.textContent = "Username must contain only letters and numbers.";
        return false;
    }
    usernameField.classList.remove("is-invalid");
    return true;
}

function validatePassword(password) {
    const passwordField = document.getElementById("password");
    if (!password) {
        passwordField.classList.add("is-invalid");
        passwordField.nextElementSibling.textContent = "Password is required.";
        return false;
    }
    if (!/^\d{10}$/.test(password)) {
        passwordField.classList.add("is-invalid");
        passwordField.nextElementSibling.textContent = "Mobile number must be exactly 10 digits.";
        return false;
    }
    passwordField.classList.remove("is-invalid");
    return true;
}

function togglePasswordVisibility() {
    const passwordValue = passwordField.value.trim();
    const passwordFieldType = passwordField.getAttribute("type");

    if (passwordValue.length <= 10 && /^\d+$/.test(passwordValue)) {
        if (passwordFieldType === "password") {
            passwordField.setAttribute("type", "text");
            passwordVisibilityIcon.className = "fa fa-eye-slash";
        } else {
            passwordField.setAttribute("type", "password");
            passwordVisibilityIcon.className = "fa fa-eye";
        }
        passwordFeedback.textContent = "";
    } else {
        if (passwordValue.length > 10) {
            passwordFeedback.textContent = "Mobile number must be exactly 10 digits.";
        } else {
            passwordFeedback.textContent = "Please enter only digits.";
        }
    }
}

document.getElementById('password').addEventListener('keypress', function (e) {
    return isNumber(e);
}, false);

function isNumber(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}