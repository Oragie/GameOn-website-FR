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

// close Modal Event
closeBtn.addEventListener("click", () => {
  // close modal form
  console.log("j'ai cliqué sur la croix")
  modalbg.style.display = "none"
})
  
// recupération données formulaire
let prenom = document.getElementById("first")
prenom.addEventListener("change", ()=> {
  
  console.log(prenom.value)
})


let nom = document.getElementById("last")
nom.addEventListener("change", ()=> {
  console.log(nom.value)
})

let email = document.getElementById("email")
email.addEventListener("change", ()=> {
  console.log(email.value)
})


let birthdate = document.getElementById("birthdate")
birthdate.addEventListener("change", ()=> {
  console.log(birthdate.value)
})


let quantity = document.getElementById("quantity")
quantity.addEventListener("change", ()=> {
  console.log(quantity.value)
})


let cguCheck = document.getElementById("checkbox1")
console.log("CGU check = ", cguCheck.checked)
cguCheck.addEventListener("change", ()=> {
  console.log("CGU check = ", cguCheck.checked)
})


let newsLetter = document.getElementById("checkbox2")
console.log("Newsletter check = ", newsLetter.checked)
newsLetter.addEventListener("change", ()=> {
  console.log("Newsletter check = ", newsLetter.checked)
})


let listeLocationBtn = document.querySelectorAll('input[name="citylocation"]')
let citylocation = ""
for (let i=0; i<listeLocationBtn.length; i++) {
    if (listeLocationBtn[i].checked){
      citylocation = listeLocationBtn[i].value  
      break }
      listeLocationBtn[i].addEventListener("change", (event)=>{
        console.log(event.target.value)
      })
}


// Message for wrong input
const message = {
  prenomOk: 'Minimum 2 caractères. Les chiffres et caractères spéciaux ne sont pas autorisés',
  nameOk: 'Minimum 2 caractères. Les chiffres et caractères spéciaux ne sont pas autorisés',
  emailOk: 'Veuillez renseigner une adresse mail valide.',
  birthdateOk: 'Vous devez avoir plus de 18 ans pour participer',
  quantityOk: 'Veuillez saisir une valeur numérique',
  cityOk: 'Veuillez sélectionner une ville',
  cguOk: `Vous devez accepter les conditions d'utilisation`,
};

const form = document.querySelector('form');

let myError = document.querySelector("span");
let myInput = document.querySelector("input");



  let error = document.querySelectorAll("error")
    




// Quand on submit
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  

  if (!prenom.value) {
    styleError()
    error = "* Champ obligatoire *"
    console.log(error)
    
  }

  if (!nom.value) {
    nom.appendChild(newSpan)
    error = "** Champ obligatoire **"
  }

  if (!email.value) {
    email.appendChild(newSpan)
    error = "** Champ obligatoire **"
  }

  if (!birthdate.value) {
    birthdate.appendChild(newSpan)
    error = "** Champ obligatoire **"
  }

  if (!quantity.value) {
    quantity.appendChild(newSpan)
    error = "** Champ obligatoire **"
  }



// function check if form are ok
function error()
  if (!error) {
    
    myError.style.fontSize="0.8rem";
    myError.style.color="red";
    myInput.style.boxShadow= "-2px 2px 33px 4px rgba(255,0,0,0.67)"; 
  }
  
  console.log("formulaire envoyé") 
});



