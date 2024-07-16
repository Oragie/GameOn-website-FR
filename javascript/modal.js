import {
  checkInputValue,
  checkIfBirthdateValue,
  checkIfConditionsAccepted,
  checkIfCitySelected,
} from "./helpers.js";

// Modal Navigation
const formWrapper = document.querySelector(".form_wrapper");
const modalSuccess = document.querySelector(".modal_success");
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector("#btn_hamb");

// Form
const form = document.querySelector("form");

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
  name: "Saisir minimum 2 caractères, ne peut être vide.",
  email: "Veuillez entrer une adresse mail valide, ne peut être vide.",
  birthdate: "Veuillez entrer votre date de naissance.",
  quantity: "Veuillez renseigner un nombre.",
  city: "Veuillez sélectionner une ville.",
  conditions: `Vous devez accepter les conditions général d'utilisation.`,
};

// Regex
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantity = /^([0-9]+)$/;

// Validate form
function validate(event, type) {
  event.preventDefault();
  if (!type)
    throw new Error("Type is required, choose between 'submit' or 'input'");
  let elements = null;
  if (type === "submit") {
    elements = event.target.elements;
  } else {
    elements = event.target.form.elements;
  }
  const firstnameField = elements["first"];
  const lastnameField = elements["last"];
  const birthdateField = elements["birthdate"];
  const emailField = elements["email"];
  const quantityField = elements["quantity"];
  const conditionsCheckbox = elements["checkbox1"];
  const allBtnRadio = elements["location"];
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
  const isBirthdateValid = checkIfBirthdateValue(
    birthdateField,
    message.birthdate
  );
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
    type === "submit" &&
    isConditionsAccepted &&
    isCitySelected &&
    isQuantityValid &&
    isBirthdateValid &&
    isEmailValid &&
    isLastNameValid &&
    isFirstNameValid
  ) {
    formWrapper.style.display = "none";
    modalSuccess.style.display = "flex";
    form.reset();
  }
}

form.addEventListener("submit", (event) => validate(event, "submit"));
form.addEventListener("input", (event) => validate(event, "input"));

// Close Success Modal
document
  .querySelector(".modal_content button")
  .addEventListener("click", () => (modalSuccess.style.display = "none"));
