import { checkInputValue, checkIfConditionsAccepted, checkIfCitySelected} from "./functions.js";

// Modal Navigation
const formWrapper = document.querySelector(".form_wrapper");
const modalSuccess = document.querySelector('.modal_success')
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector('#btn_hamb');

// Form
const form = document.querySelector('form');
const firstnameField = document.querySelector('#first');
const lastnameField = document.querySelector('#last');
const emailField = document.querySelector('#email');
const quantityField = document.querySelector('#quantity');
const conditionsCheckbox = document.querySelector('#checkbox1');
const allBtnRadio = document.querySelectorAll("input[name='location']");

// Toggle navbar
btnNav.addEventListener('click', () => document.querySelector('.list').classList.toggle('menu_toggle'));

// Open / Close Modal Form
btnSignup.forEach(btn => { btn.addEventListener('click', () => formWrapper.style.display = "flex") });
modalClose.addEventListener('click', () => formWrapper.style.display = "none");


// Message error
const message = {
    name: 'Minimum 2 caractères',
    email: 'Veuillez entrer une adresse mail valide.',
    quantity: 'Veuillez renseigner un nombre',
    city: 'Veuillez sélectionner une ville',
    conditions: `Vous devez accepter les conditions général d'utilisation`,
};

// Regex
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantity = /^([0-9]+)$/;

// Check input with event listener
firstnameField.addEventListener('input', () => checkInputValue(regexName, firstnameField, message.name)); 
lastnameField.addEventListener('input', () => checkInputValue(regexName, lastnameField, message.name));
emailField.addEventListener('input', () => checkInputValue(regexEmail, emailField, message.email));
quantityField.addEventListener('input', () => checkInputValue(regexQuantity, quantityField, message.quantity));
conditionsCheckbox.addEventListener('input', () => checkIfConditionsAccepted(conditionsCheckbox, message.conditions));
allBtnRadio.forEach(radio => radio.addEventListener('change', () => checkIfCitySelected(allBtnRadio, message.city)));
       
// Validate form
function validate(e) {
    e.preventDefault();

    // Check if all conditions are valid
    const isConditionsAccepted = checkIfConditionsAccepted(conditionsCheckbox, message.conditions);
    const isCitySelected = checkIfCitySelected(allBtnRadio, message.city);
    const isQuantityValid = checkInputValue(regexQuantity, quantityField, message.quantity);
    const isEmailValid = checkInputValue(regexEmail, emailField, message.email);
    const isLastNameValid = checkInputValue(regexName, lastnameField, message.name);
    const isFirstNameValid = checkInputValue(regexName, firstnameField, message.name);

    // If all conditions are valid 
    if (isConditionsAccepted && isCitySelected && isQuantityValid && isEmailValid && isLastNameValid && isFirstNameValid) {
        formWrapper.style.display = 'none';
        modalSuccess.style.display = 'flex';
        form.reset();
    } 
};

// Send Form
form.addEventListener('submit', e => validate(e));

// Close Success Modal
document.querySelector('.modal_content button').addEventListener('click', () => modalSuccess.style.display = "none");