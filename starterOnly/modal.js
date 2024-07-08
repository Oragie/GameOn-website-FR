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
  
// recupération données formulaire
let balisePrenom = document.getElementById("first")

let baliseNom = document.getElementById("last")

let baliseEmail = document.getElementById("email")

let baliseBirthdate = document.getElementById("birthdate")

let baliseQuantity = document.getElementById("quantity")

let baliseCGUCheck = document.getElementById("checkbox1")

let baliseNewsLetter = document.getElementById("checkbox2")

let baliseListeLocationBtn = document.querySelectorAll('input[name="citylocation"]')
let citylocation = ""
for (let i=0; i<baliseListeLocationBtn.length; i++) {
    if (baliseListeLocationBtn[i].checked){
      citylocation = baliseListeLocationBtn[i].value  
      break }
      baliseListeLocationBtn[i].addEventListener("change", (event)=>{
        console.log(event.target.value)
      })
}





// let myError = document.querySelector("span");
// let myInput = document.querySelector("input");




//   if (!prenom.value) {
//     styleError()
//     error = "* Champ obligatoire *"
//     console.log(error)
    
//   }

//   if (!nom.value) {
//     nom.appendChild(newSpan)
//     error = "** Champ obligatoire **"
//   }

//   if (!email.value) {
//     email.appendChild(newSpan)
//     error = "** Champ obligatoire **"
//   }

//   if (!birthdate.value) {
//     birthdate.appendChild(newSpan)
//     error = "** Champ obligatoire **"
//   }

//   if (!quantity.value) {
//     quantity.appendChild(newSpan)
//     error = "** Champ obligatoire **"
//   }



// // function check if form are ok
// function error()
//   if (!error) {
    
//     myError.style.fontSize="0.8rem";
//     myError.style.color="red";
//     myInput.style.boxShadow= "-2px 2px 33px 4px rgba(255,0,0,0.67)"; 
//   }
  
//   console.log("formulaire envoyé") 
// });

//** form declaration and test when submit **/
const form = document.querySelector('form');


// /*function to check empty field */
// function checkFields(balise) {
//   if (!balise.value) {
//     let error = document.getElementById('error')
//     balise.classList.add('input_error')
//     error.innerHTML="** Champ Obligatoire **"
//     console.log(balise.classList)
//   } else {
//     balise.classList.remove("input_error")
//   }
// }

// // function to check correct expression for mail
// function checkEmail(balise) {
//   let emailRegExp = new RegExp("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")
//   if (emailRegExp.test(balise.value)) {
//     balise.classList.remove("input_error")
//     } else {
//       balise.classList.add('input_error')
//       error="balise+Ok"
//     }
// }



// // function to check correct expression for mail
// function checkAlpha(balise) {
//   let alphaRegExp = new RegExp("\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+")
//   if (alphaRegExp.test(balise.value)) {
//     balise.classList.remove("input_error")
//     } else {
//       balise.classList.add('input_error')
//       error="balise+Ok"
//     }
// }

// // Quand on submit
// form.addEventListener("submit", (event) => {
//   checkAlpha(balisePrenom)
//   checkFields(balisePrenom)
//   // On empêche le comportement par défaut
//   event.preventDefault();
// });

// form.addEventListener("submit", (event) => {
//   // On empêche le comportement par défaut
//   event.preventDefault();
//   checkFields(baliseNom)
// });

// /*au changement tant que l'email n'est pas bien écrit*/
// baliseEmail.addEventListener("change", () => {
//   checkEmail(baliseEmail)
// })

// form.addEventListener("submit", (event) => {
//   // On empêche le comportement par défaut
//   event.preventDefault();
//   checkFields(baliseBirthdate)
// });

// form.addEventListener("submit", (event) => {
//   // On empêche le comportement par défaut
//   event.preventDefault();
//   checkFields(baliseQuantity)
// });

// form.addEventListener("submit", (event) => {
//   On empêche le comportement par défaut
//   event.preventDefault();
//   checkFields(baliseListeLocationBtn)
// });

// // Fonction pour afficher un message d'erreur et ajouter la classe d'erreur
// function showError(element, message) {
//   element.classList.add('input_error');
//   let errorElement = element.nextElementSibling;
//   if (errorElement && errorElement.classList.contains('error')) {
//     errorElement.textContent = message;
//   }
// }

// Message for wrong input
const message = {
  balisePrenomOk: 'Minimum 2 caractères. Les chiffres et caractères spéciaux ne sont pas autorisés',
  baliseNameOk: 'Minimum 2 caractères. Les chiffres et caractères spéciaux ne sont pas autorisés',
  baliseEmailOk: 'Veuillez renseigner une adresse mail valide.',
  baliseBirthdateOk: 'Vous devez avoir plus de 18 ans pour participer',
  baliseQuantityOk: 'Veuillez saisir une valeur numérique',
  baliseListeLocationBtnOk: 'Veuillez sélectionner une ville',
  baliseCGUCheckOk: `Vous devez accepter les conditions d'utilisation`,
};

// Fonction pour ajouter un message d'erreur à un élément avec la classe error
function addErrorMessage(spanElement, message) {
  spanElement.textContent = message;  // Utilise textContent pour ajouter du texte
}

// Exemple d'utilisation
const errorSpan = document.querySelector('.error');  // Sélectionne le premier élément avec la classe error



function checkFields(balise) {
  let isValid = true;

  balise.classList.add ("input_error")

  const alphaRegExp = new RegExp("\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+")
  if (!balisePrenom.value || !balisePrenom.test(balise.value)) {
    addErrorMessage(errorSpan, "Le champ Prénom a un minimum de 2 caractères / n'est pas vide.")
    isValid = false;
  } else{
    balise.classList.remove ("input_error")
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

