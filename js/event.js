document.getElementById('login-submit').addEventListener('click', function () {

    let emailInput = document.getElementById('email-id');
    let email = emailInput.value;
    let passwordInput = document.getElementById('pass');
    let password = passwordInput.value;

    if (email == "rahulbd@gmail.com" && password == "rahul5566") {
        window.location.href = "bank.html";
    }


})