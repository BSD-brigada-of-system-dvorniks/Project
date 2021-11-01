//Modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//Click events
openBtn.addEventListener('click', function() {
    modal.style.display = 'block';
} );

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
} );

window.addEventListener('click', function(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
})

//Form validation
const form = document.getElementById('form');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//Show error message
function showError(input,message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//Show valid message
function showValid(input){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showValid(input);
        }
    })
}

//Checks input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.lenght > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else{
        showValid(input);
    }
}

//Matching passwords
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

//Getting fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//EventListeners
form.addEventListener('submit', function(e){
    //e.preventDefault();

    checkRequired([name1, email, password, passwordConfirm]);
    checkLength(name1, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
})