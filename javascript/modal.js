import {
  checkInputValue,
  checkIfConditionsAccepted,
  checkIfCitySelected,
  checkBirthDate,
} from "./helpers.js";

// Modal Navigation
const formWrapper = document.querySelector(".form_wrapper");
const modalSuccess = document.querySelector(".modal_success");
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector("#btn_hamb");

// Form
const form = document.querySelector("form");
const firstnameField = document.querySelector("#first");
const lastnameField = document.querySelector("#last");
const birthdateField = document.querySelector("#birthdate");
const emailField = document.querySelector("#email");
const quantityField = document.querySelector("#quantity");
const conditionsCheckbox = document.querySelector("#checkbox1");
const allBtnRadio = document.querySelectorAll("input[name='location']");

// Toggle navbar
btnNav.addEventListener("click", () =>
  document.querySelector(".list").classList.toggle("menu_toggle")
);

// Open / Close Modal Form
btnSignup.forEach((btn) => {
  btn.addEventListener("click", () => (formWrapper.style.display = "flex"));
});
modalClose.addEventListener(
  "click",
  () => (formWrapper.style.display = "none")
);

// Message error
const message = {
  name: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  email: "Veuillez entrer une adresse mail valide.",
  birthdate: "Vous devez entrer votre date de naissance.",
  quantity: "Veuillez renseigner un nombre",
  city: "Vous devez choisir une option.",
  conditions: `Vous devez vérifier que vous acceptez les termes et conditions.`,
};

// Regex
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantity = /^([0-9]+)$/;

// Validate form
function validate(event) {
  event.preventDefault();

  // Check if all conditions are valid
  const isConditionsAccepted = checkIfConditionsAccepted(
    conditionsCheckbox,
    message.conditions
  );
  const isCitySelected = checkIfCitySelected(allBtnRadio, message.city);
  const isQuantityValid = checkInputValue(
    regexQuantity,
    quantityField,
    message.quantity
  );

  const isBirthDateValid = checkBirthDate(birthdateField, message.birthdate);

  const isEmailValid = checkInputValue(regexEmail, emailField, message.email);
  const isLastNameValid = checkInputValue(
    regexName,
    lastnameField,
    message.name
  );
  const isFirstNameValid = checkInputValue(
    regexName,
    firstnameField,
    message.name
  );

  // If all conditions are valid
  if (
    isConditionsAccepted &&
    isCitySelected &&
    isQuantityValid &&
    isBirthDateValid &&
    isEmailValid &&
    isLastNameValid &&
    isFirstNameValid
  ) {
    formWrapper.style.display = "none";
    modalSuccess.style.display = "flex";
    form.reset();
  }
}

function checkValidation(event) {
  const formInputs = new FormData(event.target.form);
  const formData = {};
  for (let [name, value] of formInputs.entries()) {
    formData[name] = {
      value: value,
      element: event.target.form.elements[name],
    };
  }
  console.log("formData CHECK", formData);
  // querySelect pour chaque key.
  if (formData.cgu) {
    checkIfConditionsAccepted(formData.cgu.element, message.conditions);
  }
  checkIfCitySelected(allBtnRadio, message.city);
  checkInputValue(regexQuantity, quantityField, message.quantity);
  checkBirthDate(birthdateField, message.birthdate);
  checkInputValue(regexEmail, emailField, message.email);
  checkInputValue(regexName, lastnameField, message.name);
  checkInputValue(regexName, firstnameField, message.name);
}

// Send Form
form.addEventListener("submit", (event) => validate(event));
form.addEventListener("input", (event) => checkValidation(event));

// Close Success Modal
document
  .querySelector(".modal_content button")
  .addEventListener("click", () => (modalSuccess.style.display = "none"));
