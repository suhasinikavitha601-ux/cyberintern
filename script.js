function generatePassword() {

    let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

    let pass = "";

    for (let i = 0; i < 12; i++) {
        pass += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    return pass;
}

function checkPassword() {

    let password = document.getElementById("password").value;

    let score = 0;

    let commonPasswords = [
        "123456",
        "password",
        "admin",
        "welcome",
        "qwerty"
    ];

    // Common password check
    if (commonPasswords.includes(password.toLowerCase())) {

        document.getElementById("strength").innerHTML =
            "Very Weak Password";

        document.getElementById("suggestion").innerHTML =
            "Suggested Password: " + generatePassword();

        return;
    }

    // Strength checks
    if (password.length >= 8)
        score++;

    if (/[A-Z]/.test(password))
        score++;

    if (/[a-z]/.test(password))
        score++;

    if (/[0-9]/.test(password))
        score++;

    if (/[^A-Za-z0-9]/.test(password))
        score++;

    let result = "";
    let suggestion = "";

    if (score <= 2) {

        result = "Weak Password";

        suggestion =
            "Suggested Password: " + generatePassword();

    }
    else if (score <= 4) {

        result = "Medium Password";

        suggestion =
            "Add more special characters and increase length.";

    }
    else {

        result = "Strong Password";

        suggestion =
            "Excellent password strength.";

    }

    document.getElementById("strength").innerHTML = result;
    document.getElementById("suggestion").innerHTML = suggestion;
}