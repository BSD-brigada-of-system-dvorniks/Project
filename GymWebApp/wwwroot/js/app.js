//Modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.genric-btn.primary');
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
    return true;
}

//Check required fields
function checkRequired(inputArr) {
var some = 0;
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            some --;
        } else {
            showValid(input);
            some ++;
        }
    })
    return some;
}

//Checks input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.lenght > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else{
        return showValid(input);

    }
}

//Matching passwords
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    } else{
        return true;
    }
}

//Getting fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//EventListeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(signup == true){
    a = checkRequired([name1, email, password, passwordConfirm]);
    b = checkLength(name1, 3, 30);
    c = checkLength(password, 8, 25);
    d = checkLength(passwordConfirm, 8, 25);
    f = passwordMatch(password, passwordConfirm);
    console.log(a,b,c,d,f)
    if ((b && c && d && f) && (a == 4)) {
        window.location.href = 'personal page.html';
    }
    } else{
        if (checkRequired([email, password]) == 2){
            window.location.href = 'personal page.html';
        }
    }
})

//Calling login/register form
let signup = true;
const loginBtn = document.querySelector('.modal-input-login');
const signupBtn = document.querySelector('.modal-input-signup');
const inputBtn = document.querySelector('.modal-input-btn');
const header = document.getElementById("registration-header");

function returnToDefault(inputArr) {
    inputArr.forEach(function(input){
        const formValidation = input.parentElement;
        formValidation.className = 'form-validation';
    })
}

loginBtn.addEventListener('click', function() {
    //window.location.reload();
    document.getElementById("password").type = "password";
    signup = false;
    name1.style.display = "none";
    passwordConfirm.style.display = "none";

    returnToDefault([name1, email, password, passwordConfirm]);

    header.textContent = "Sign in to your account.";
    inputBtn.value = "Sign In";
    loginBtn.style.display = "none";
    signupBtn.style.display = "block";
} );

signupBtn.addEventListener('click', function() {
    //window.location.reload();
    document.getElementById("password").type = "text";
    signup = true;
    name1.style.display = "block";
    passwordConfirm.style.display = "block";

    returnToDefault([name1, email, password, passwordConfirm]);

    header.textContent = "Get started with us today! Create your account by filling out the information below.";
    inputBtn.value = "Sign Up";
    loginBtn.style.display = "block";
    signupBtn.style.display = "none";
} );

// function registrationFunction(){
//     modal.style.display = 'none';
// }