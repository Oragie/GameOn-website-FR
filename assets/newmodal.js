function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  const closeBtn = document.querySelector(".close");
  
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }
  
  //** close Modal Event **//
  closeBtn.addEventListener("click", () => {
    // close modal form
    console.log("j'ai cliqué sur la croix")
    modalbg.style.display = "none"
  })

// DOM Elements
const form = document.querySelector('form');

// Fonction pour afficher un message d'erreur et ajouter la classe d'erreur
function showError(element, message) {
  element.classList.add('input_error');
  let errorElement = element.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error')) {
    errorElement.textContent = message;
  }
}

// Fonction pour supprimer le message d'erreur et la classe d'erreur
function clearError(element) {
  element.classList.remove('input_error');
  let errorElement = element.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error')) {
    errorElement.textContent = '';
  }
}

// Vérification des champs
function checkFields() {
  let isValid = true;

  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const citylocation = document.querySelectorAll('input[name="citylocation"]');
  const cguCheck = document.getElementById('checkbox1');

  if (!firstName.value) {
    showError(firstName, '** Champ obligatoire à saisir **');
    isValid = false;
  } else {
    clearError(firstName);
  }

  if (!lastName.value) {
    showError(lastName, '** Champ obligatoire à saisir **');
    isValid = false;
  } else {
    clearError(lastName);
  }

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailRegExp.test(email.value)) {
    showError(email, 'Veuillez renseigner une adresse mail valide.');
    isValid = false;
  } else {
    clearError(email);
  }

  if (!birthdate.value) {
    showError(birthdate, '** Champ obligatoire à saisir **');
    isValid = false;
  } else {
    clearError(birthdate);
  }

  if (!quantity.value) {
    showError(quantity, '** Champ obligatoire à saisir **');
    isValid = false;
  } else {
    clearError(quantity);
  }

  let locationSelected = false;
  citylocation.forEach(location => {
    if (location.checked) {
      locationSelected = true;
    }
  });

  if (!locationSelected) {
    showError(citylocation[0].parentElement, 'Veuillez sélectionner une ville');
    isValid = false;
  } else {
    clearError(citylocation[0].parentElement);
  }

  if (!cguCheck.checked) {
    showError(cguCheck, `Vous devez accepter les conditions d'utilisation`);
    isValid = false;
  } else {
    clearError(cguCheck);
  }

  return isValid;
}

// Quand on submit
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();

  if (checkFields()) {
    console.log("Formulaire envoyé avec succès");
    // Ajouter ici le code pour envoyer le formulaire
  } else {
    console.log("Le formulaire contient des erreurs");
  }
});
