//javascript
// Select elements
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirm-password');
const submit = document.getElementById('submit');

// Regular Expressions
const fnamePattern = /^[a-zA-Z ]{3,30}$/;
const lnamePattern = /^[a-zA-Z ]{3,30}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Validation Function
function validate(input, pattern) {
    if (pattern.test(input.value.trim())) {
        input.style.border = '2px solid green';
        return true;
    } else {
        input.style.border = '2px solid red';
        return false;
    }
}

// First Name Validation
fname.addEventListener('input', () => {
    validate(fname, fnamePattern);
});

// Last Name Validation
lname.addEventListener('input', () => {
    validate(lname, lnamePattern);
});

// Email Validation
email.addEventListener('input', () => {
    validate(email, emailPattern);
});

// Password Validation
password.addEventListener('input', () => {
    validate(password, passwordPattern);
    checkPasswordMatch();
});

// Confirm Password Validation
cpassword.addEventListener('input', () => {
    checkPasswordMatch();
});

// Check Password Match
function checkPasswordMatch() {
    if (
        password.value === cpassword.value &&
        cpassword.value !== ''
    ) {
        cpassword.style.border = '2px solid green';
        return true;
    } else {
        cpassword.style.border = '2px solid red';
        return false;
    }
}

// Submit Validation
submit.addEventListener('click', (e) => {
    e.preventDefault();

    const isFnameValid = validate(fname, fnamePattern);
    const isLnameValid = validate(lname, lnamePattern);
    const isEmailValid = validate(email, emailPattern);
    const isPasswordValid = validate(password, passwordPattern);
    const isPasswordMatch = checkPasswordMatch();

    if (
        isFnameValid &&
        isLnameValid &&
        isEmailValid &&
        isPasswordValid &&
        isPasswordMatch
    ) {
        alert('Form submitted successfully!');
    } else {
        alert('Password is not Matched!');
    }
});