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


let listeLocationBtn = document.querySelectorAll("input[type=radio]")
for (let i=0; i<listeLocationBtn.length; i++) {
  
    if (listeLocationBtn[i].checked){
      listeLocationBtn.addEventListener("change", () => {
    console.log(listeLocationBtn[i].value)   
})
}
}

