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

    //init error messge by boolean false
    var emailhasError = false;
    var passwordhasError = false;
    

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        emailhasError = true;
    } else {
        setInvalid(email);
        emailhasError = true;
    }

    

    var password = document.getElementById('login-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        passwordhasError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        passwordhasError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        passwordhasError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        passwordhasError = true;
    } else {
        setValid(password);
    }

    //render the appearance of error messsage
    if (emailhasError) {
        document.getElementById('login-email-error').classList.remove('d-none');
    } else {
        document.getElementById('login-email-error').classList.add('d-none');
    }

    if (passwordhasError) {
        document.getElementById('login-pass-error').classList.remove('d-none');
    } else {
        document.getElementById('login-pass-error').classList.add('d-none');
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

    var firstnamehasError = false;
    var lastnamehasError = false;
    var emailhasError = false;
    var passwordhasError = false;
    var programmehasError = false;


    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        firstnamehasError = true;
    } else if (firstName.validity.valid) {
        setValid(firstName);
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        lastnamehasError = true;
    } else if (lastName.validity.valid) {
        setValid(lastName);
    }

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        emailhasError = true;
    } else {
        setInvalid(email);
        emailhasError = true;
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        passwordhasError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        passwordhasError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        passwordhasError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        passwordhasError = true;
    } else {
        setValid(password);
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        programmehasError = true;
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        programmehasError = true;
    } else {
        setValid(programme);
    }

    if (firstnamehasError) {
        document.getElementById('register-fistn-error').classList.remove('d-none');
    } else {
        document.getElementById('register-fistn-error').classList.add('d-none');
    }

    if (lastnamehasError) {
        document.getElementById('register-lastn-error').classList.remove('d-none');
    } else {
        document.getElementById('register-lastn-error').classList.add('d-none');
    }

    if (emailhasError) {
        document.getElementById('register-email-error').classList.remove('d-none');
    } else {
        document.getElementById('register-email-error').classList.add('d-none');
    }

    if (passwordhasError) {
        document.getElementById('register-pass-error').classList.remove('d-none');
    } else {
        document.getElementById('register-pass-error').classList.add('d-none');
    }

    if (programmehasError) {
        document.getElementById('register-prog-error').classList.remove('d-none');
    } else {
        document.getElementById('register-prog-error').classList.add('d-none');
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
