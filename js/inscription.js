// ------------------------- PROGRAMME PRINCIPAL -------------------------
// Initialisation des variables
var form = document.getElementById("formInscription");
var errMail = document.getElementById("errMail");
var errConfMdp = document.getElementById("errConfMdp");
var btnInscription = document.getElementById("btnInscription");
var bErreur = false;
var champMDP = document.querySelector('input[type="password"]');
var afficheMDP = document.getElementById("afficheMDP");


// Abonnement du bouton inscription pour lancer la fonction mdpConfirm
btnInscription.addEventListener("click", mdpConfirm);        

/**
 * Contrôles des informations saisies par l'utilisateur, puis
 * stockage des informations valides dans la session 
 * @param {object} e est un objet évènement rattachée à la méthode preventDefault
 */
form.addEventListener("submit", (e) => {

var nom = document.getElementById("inscriptionNom").value;
var prenom = document.getElementById("inscriptionPrenom").value;
var adresse = document.getElementById("inscriptionAdresse").value;
var cp = document.getElementById("inscriptionCodePostal").value;
var ville = document.getElementById("inscriptionVille").value;
var mail = document.getElementById("inscriptionEmail").value;
var mdp = document.getElementById("inscriptionMDP").value;
var confMdp = document.getElementById("inscriptionConfirmMDP").value;
bErreur = false;

for (var compte of comptes.entries()) {
    if (compte.identifiant == compte) {
        errMail.innerHTML = "Cette adresse mail existe déjà";
        bErreur = true;
    } else {
        errMail.innerHTML = "ok";
    }
}
    if(bErreur === true) e.preventDefault();
    else {
        sessionStorage.setItem("Nom : ", nom);
        sessionStorage.setItem("Prénom : ", prenom);
        sessionStorage.setItem("Adresse : ", adresse);
        sessionStorage.setItem("CP : ", cp);
        sessionStorage.setItem("Ville : ", ville);
        sessionStorage.setItem("Mail : ", mail);
        sessionStorage.setItem("MDP : ", mdp);
        sessionStorage.setItem("confMDP : ", confMdp);

    }

});

// ------------------------- FONCTIONS -------------------------


/**
 * Compare le mot de passe et la confirmation saisies, un message informe l'utilisateur si sa saisie est incorrecte
 * @param {*} e est un objet évènement rattachée à la méthode preventDefault
 */
function mdpConfirm (e) {

    var inscriptionMDP = document.getElementById("inscriptionMDP").value;
    var inscriptionConfirmMDP = document.getElementById("inscriptionConfirmMDP").value;

    if (inscriptionConfirmMDP !== inscriptionMDP) {
        errConfMdp.innerHTML = "Les mots de passe ne sont pas identiques";
        errConfMdp.style.color = "red";
        bErreur = true;
        e.preventDefault();
    }

}