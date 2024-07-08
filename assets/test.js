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
let prenom = balisePrenom.value

let baliseNom = document.getElementById("last")
let nom = baliseNom.value

let baliseEmail = document.getElementById("email")
let email = baliseEmail.value

let baliseQuantity = document.getElementById("quantity")
let quantity = baliseQuantity.value

let baliseCGUCheck = document.getElementById("checkbox1")
let cguCheck = baliseCGUCheck.checked

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
  
/*** Functions to validate fields ***/

function validerPrenom(prenom){
    if (prenom.length >=2 ){
        return true
    }
    return false
}

function validerNom(nom){
    if (nom.length >=2 ){
        return true
    }
    return false
}


function validerEmail(email){
    let emailRegExp = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9]+")
    if (emailRegExp.test(email)) {
        return true
    }
    return false
}

function validerQuantity(quantity){
    let quantityRegExp = new RegExp("[0-9]+")
    if (quantityRegExp.test(quantity)) {
        return true
    }
    return false
}

function validerListeLocationBtn(baliseListeLocationBtn){
    
        if (baliseListeLocationBtn.checked === true){
            return true
        }
        return false
   
}

function validerCGUChecked(cguCheck){
    if (cguCheck.checked === true){
        return true
    }
    return false
}

//** form declaration and test when submit **/
let form = document.querySelector('form');

// Quand on submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();

  
    let balisePrenom = document.getElementById("first")
    let prenom = balisePrenom.value

    let baliseNom = document.getElementById("last")
    let nom = baliseNom.value

    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value

    let baliseQuantity = document.getElementById("quantity")
    let quantity = baliseQuantity.value

    let baliseListeLocationBtn = document.querySelectorAll('input[name="citylocation"]')
    let citylocation = ""
    for (let i=0; i<baliseListeLocationBtn.length; i++) {
        if (baliseListeLocationBtn[i].checked){
        citylocation = baliseListeLocationBtn[i].value  
        break }
    }

    let baliseCGUCheck = document.getElementById("checkbox1")
    let cguCheck = baliseCGUCheck.checked

  
    if (validerPrenom(prenom) 
        && validerNom(nom) 
        && validerEmail(email) 
        && validerQuantity(quantity) 
        // && validerListeLocationBtn(baliseListeLocationBtn) 
        && validerCGUChecked(cguCheck)) {
      console.log("Formulaire envoyé avec succès");
      // Ajouter ici le code pour envoyer le formulaire
    } else {
      console.log("Le formulaire contient des erreurs");
    }
})