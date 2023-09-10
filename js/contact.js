// ------------------------- PROGRAMME PRINCIPAL -------------------------

// Initialisation des variables
var form = document.getElementsByName("formContact");
var envoyer = document.getElementById("envoyer");
var confEnvoie = document.getElementById("confEnvoie");

var controleNom = document.getElementById("controleNom");
var controlePrenom = document.getElementById("controlePrenom");
var controleTel = document.getElementById("controleTel");
var controleMail = document.getElementById("controleMail");
var controleMess = document.getElementById("controleMess");
var messControles = document.getElementById("messControles");

 // Abonnement du bouton Envoyer
 envoyer.addEventListener("click", verifForm);


// ------------------------- FONCTIONS -------------------------

// Fonction
/**
 * Contrôles de la saisie utilisateur en bloquant la soumission du formulaire en cas d'erreur
 * et en stockant les informations valides dans la session
 * @param {object} e est un objet évènement rattachée à la méthode preventDefault
 */
function verifForm(e) {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var tel = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message").value;
    var bErreur = false;

    if(nom.length <= 1){
        controleNom.innerHTML = "Le nom doit comporter au moins 2 caractères";
        controleNom.style.color = "red";
        bErreur = true;
    } else {
        controleNom.innerHTML = "Champ valide";
        controleNom.style.color = "green";
    }

    if(prenom.length <= 1) {
        controlePrenom.innerHTML = "Le prenom doit comporter au moins 2 caractères";
        controlePrenom.style.color = "red";
        bErreur = true;
    } else {
        controlePrenom.innerHTML = "Champ valide";
        controlePrenom.style.color = "green";
    }

    if(tel.length <9) {
        controleTel.innerHTML = "Le numéro doit comporter 10 chiffres";
        controleTel.style.color = "red";
        bErreur = true;
    } else {
        controleTel.innerHTML = "Champ valide";
        controleTel.style.color = "green";
    }
    
    if(!mail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}$/)) {
        controleMail.innerHTML = "Le format ne respecte pas le masque xx@x.xx";
        controleMail.style.color = "red";
        bErreur = true;
    } else {
        controleMail.innerHTML = "Champ valide";
        controleMail.style.color = "green";
    }

    if(message.length <= 19) {
        controleMess.innerHTML = "Le message doit contenir au moins 20 caractères pour nous aider à cibler au mieux votre demande";
        controleMess.style.color = "red";
        bErreur = true;
    } else {
        controleMess.innerHTML = "Champ valide";
        controleMess.style.color = "green";
    }   

    if(bErreur === true) e.preventDefault();
    else {
        sessionStorage.setItem("Nom :", nom);
        sessionStorage.setItem("Prénom :", prenom);
        sessionStorage.setItem("Téléphone :", tel);
        sessionStorage.setItem("Email :", mail);
        sessionStorage.setItem("Message :", message);
    }
}
