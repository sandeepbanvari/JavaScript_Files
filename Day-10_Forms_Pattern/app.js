const patterns = {
    firstName: /^[A-Za-z]{3,15}$/,
    lastName: /^[A-Za-z]{3,15}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobile: /^[6-9]\d{9}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,15}$/,
};

const form = document.getElementById("registrationForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    const fields = [
        "firstName",
        "lastName",
        "email",
        "mobile",
        "password"
    ];

    fields.forEach((field) => {
        const input = document.getElementById(field);
        const error = document.getElementById(field + "Error");

        if (!patterns[field].test(input.value.trim())) {
            const messages = {
                firstName: "First name must contain 3-15 letters only",
                lastName: "Last name must contain 3-15 letters only",
                email: "Enter a valid email address",
                mobile: "Enter a valid 10-digit mobile number",
                password: "Password must contain uppercase, lowercase and number",
            };

            error.textContent = messages[field];
            isValid = false;
        } else {
            error.textContent = "";
        }
    });

        if (isValid) {
            alert("Registration Successful!");

            localStorage.setItem("email", document.getElementById("email").value);
            localStorage.setItem("password", document.getElementById("password").value);

            window.location.href = "./login.html";
        }
    
});


