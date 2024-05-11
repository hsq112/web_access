/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var email = document.getElementById('login-email-control');
    var password = document.getElementById('login-password-control');
    var emailError = document.getElementById('login-email-error');
    var passwordError = document.getElementById('login-password-error');
    var errorDiv = document.getElementById('login-error');

    // Validate email
    if (email.validity.valid) {
        setValid(email);
        emailError.innerHTML = ''; // Clear any existing error message
    } else {
        setInvalid(email);
        hasError = true;
        if (email.validity.valueMissing) {
            emailError.innerHTML = 'Email is required.'; // Specific error for missing value
        } else if (email.validity.typeMismatch) {
            emailError.innerHTML = 'Please enter a valid email address.'; // Specific error for type mismatch
        } else {
            emailError.innerHTML = 'Please correct the email address.'; // Generic error if other validations fail
        }
    }

    // Validate password
    if (password.value.trim().length == 0) {
        setInvalid(password);
        passwordError.innerHTML = 'Password cannot be empty.'; // Specific error for empty password
        hasError = true;
    } else {
        setValid(password);
        passwordError.innerHTML = ''; // Clear any existing error message
    }

    // Show or hide the error notification
    if (hasError) {
        errorDiv.classList.remove('d-none');
        errorDiv.innerHTML = 'Please correct the errors below and try again.'; // More informative error message
    } else {
        errorDiv.classList.add('d-none');
        errorDiv.innerHTML = ''; // Clear the error message when all fields are valid
    }
}


/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
    } else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var firstName = document.getElementById('register-first-name-control');
    var firstNameError = document.getElementById('register-first-name-error');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        firstNameError.textContent = 'First name is required.';
        hasError = true;
    } else {
        setValid(firstName);
        firstNameError.textContent = ''; // Clear the error message
    }

    var lastName = document.getElementById('register-last-name-control');
    var lastNameError = document.getElementById('register-last-name-error');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        lastNameError.textContent = 'Last name is required.';
        hasError = true;
    } else {
        setValid(lastName);
        lastNameError.textContent = ''; // Clear the error message
    }

    var email = document.getElementById('register-email-control');
    var emailError = document.getElementById('register-email-error');
    if (!email.validity.valid) {
        setInvalid(email);
        emailError.textContent = email.validity.valueMissing ? 'Email is required.' : 'Please enter a valid email.';
        hasError = true;
    } else {
        setValid(email);
        emailError.textContent = ''; // Clear the error message
    }

    var password = document.getElementById('register-password-control');
    var passwordError = document.getElementById('register-password-error');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        passwordError.textContent = 'Password must be at least 8 characters.';
        hasError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        passwordError.textContent = 'Password must not exceed 16 characters.';
        hasError = true;
    } else if (!passwordValue.match(/[a-zA-Z]/) || !passwordValue.match(/[0-9]/)) {
        setInvalid(password);
        passwordError.textContent = 'Password must contain letters and numbers.';
        hasError = true;
    } else {
        setValid(password);
        passwordError.textContent = ''; // Clear the error message
    }

    var programme = document.getElementById('register-programme-control');
    var programmeError = document.getElementById('register-programme-error');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        programmeError.textContent = 'Selecting a programme is required.';
        hasError = true;
    } else {
        setValid(programme);
        programmeError.textContent = ''; // Clear the error message
    }

    var errorContainer = document.getElementById('register-error');
    if (hasError) {
        errorContainer.classList.remove('d-none');
    } else {
        errorContainer.classList.add('d-none');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);
