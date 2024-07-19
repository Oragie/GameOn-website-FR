import {
  checkInputValue,
  checkIfBirthdateValue,
  checkIfConditionsAccepted,
  checkIfCitySelected,
} from "./helpers.js"; // Importation des fonctions de validation depuis helpers.js

// Sélection des éléments de la modale
const formWrapper = document.querySelector(".form_wrapper");
const modalSuccess = document.querySelector(".modal_success");
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector("#btn_hamb");

// Sélection du formulaire
const form = document.querySelector("form");

// Ajout d'un écouteur d'événement pour basculer la navigation
btnNav.addEventListener("click", () =>
  document.querySelector(".list").classList.toggle("menu_toggle")
);

// Ouvrir/Fermer la modale de formulaire
btnSignup.forEach((btn) => {
  btn.addEventListener("click", () => (formWrapper.style.display = "flex"));
});
modalClose.addEventListener(
  "click",
  () => (formWrapper.style.display = "none")
);

// Messages d'erreur spécifiques
const message = {
  name: "Saisir minimum 2 caractères, ne peut être vide.",
  email: "Veuillez entrer une adresse mail valide, ne peut être vide.",
  birthdate: "Veuillez entrer votre date de naissance.",
  quantity: "Veuillez renseigner un nombre.",
  city: "Veuillez sélectionner une ville.",
  conditions: `Vous devez accepter les conditions général d'utilisation.`,
};

// Regex pour valider les entrées
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantity = /^([0-9]+)$/;

// Fonction de validation du formulaire
function validate(event, type) {
  event.preventDefault();
  if (!type)
    throw new Error("Type is required, choose between 'submit' or 'input'"); // Vérification du type d'événement

  let elements = null;
  if (type === "submit") {
    elements = event.target.elements; // Récupération des éléments du formulaire lors de la soumission
  } else {
    elements = event.target.form.elements; // Récupération des éléments du formulaire lors de l'entrée
  }

  // Récupération des champs du formulaire
  const firstnameField = elements["first"];
  const lastnameField = elements["last"];
  const birthdateField = elements["birthdate"];
  const emailField = elements["email"];
  const quantityField = elements["quantity"];
  const conditionsCheckbox = elements["checkbox1"];
  const allBtnRadio = elements["location"];

  // Validation des différents champs
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

  // Si toutes les conditions sont remplies lors de la soumission
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
    formWrapper.style.display = "none"; // Fermeture de la modale de formulaire
    modalSuccess.style.display = "flex"; // Affichage de la modale de succès
    form.reset(); // Réinitialisation du formulaire
  }
}

// Ajout des écouteurs d'événements pour la soumission et l'entrée du formulaire
form.addEventListener("submit", (event) => validate(event, "submit"));
form.addEventListener("input", (event) => validate(event, "input"));

// Fermeture de la modale de succès
document
  .querySelector(".modal_content button")
  .addEventListener("click", () => (modalSuccess.style.display = "none"));
