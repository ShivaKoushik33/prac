function validate() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var fn=document.getElementById("fn");
    
    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z]+$/;
    var usernameLength = username.length;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;

    Validation
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        fn.innerText='First name and last name should contain only characters.'
        return false;
    }
    if (usernameLength < 6 || usernameLength > 15) {
        alert('Username length should be between 6 and 15 characters.');
        return false;
    }
    if (!password.match(passwordRegex)) {
        alert('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, one special character, and should start with an alphabet.');
        return false;
    }
    if (!email.match(emailRegex)) {
        alert('Email id should be in proper format.');
        return false;
    }
    if (!phone.match(phoneRegex)) {
        alert('Phone number should contain only 10 numbers.');
        return false;
    }
    return true;
}