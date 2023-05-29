const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const formSuccess = document.querySelector("#formSuccess")

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }


    if (firstName.value) {
        console.log();
    } else {
        console.log('Please fill up the first name braket to sign up.');
    }
    if (subject.value.length >= 9) {
        console.log();
    } else {
        console.log('Please fill up the subject with minimun of 10 characters to sign up.');
    }
    if (validateEmail(email.value)) {
        console.log();
    } else {
        console.log('Please fill up the brakets with an valid email id to sign up.');
    }
    if (address.value.length >= 24) {
        console.log();
    } else {
        console.log('Please fill up the address with minimum of 25 characters to sign up.');
    }
    if (firstName.value, subject.value.length >= 9, address.value.length >= 24)
        if (validateEmail(email.value)) {
            formSuccess.style.display = "block";
            console.log('You have succusfully signed up!');
        }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}