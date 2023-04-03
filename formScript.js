const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById('form');
const username = document.getElementById('username');
const personalid = document.getElementById('personalid');
const address = document.getElementById('address');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const errorElements = document.querySelectorAll('.error');

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (input, message) => {
    const errorElement = input.nextElementSibling;
    errorElement.innerText = message;


    input.parentElement.classList.add('input-control', 'error');
    input.parentElement.classList.remove('success');

}

const setSuccess = (input) => {
    const errorElement = input.nextElementSibling;
    errorElement.innerText = '';


    input.parentElement.classList.add('input-control', 'success');
    input.parentElement.classList.remove('error');

}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const personalidValue = personalid.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let isValid = true;

    if(usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }
    if(personalidValue === '') {
        setError(personalid, 'Personal Id is required');
        isValid = false;
    } else if (personalidValue.length != 9 || isNaN(personalidValue)) {
        setError(personalid, 'ID must be 9 characters (numbers only!).')
        isValid = false;
    } else {
        setSuccess(personalid);
    }
    if(addressValue === '') {
        setError(address, 'Address is required');
        isValid = false;
    } else {
        setSuccess(address);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters.')
        isValid = false;
    } else {
        setSuccess(password);
    }
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
        isValid = false;
    } else {
        setSuccess(password2);
    }

    return isValid;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = validateInputs();
    
    if (isValid) {
        window.location.href = 'test.html';
        submitBtn.disabled = true;
    }
});
